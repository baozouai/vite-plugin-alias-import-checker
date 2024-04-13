import { dirname } from 'path';
import { type Plugin, createFilter } from 'vite';
/**
 * 检测 alias import
 */
export default function ResolveImportChecker() {
  const filter = createFilter(
    [/\.[jt]sx?$/, /\.vue$/],
    [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
  );
  const Replace2Find: Record<string, string> = {};
  let findRegExp: RegExp;
  let replaceRegExp: RegExp;

  return {
    name: 'resolve-import-checker',
    enforce: 'post',
    apply: 'serve',
    configResolved(config) {
      const { alias } = config.resolve;
      if (!alias) return;

      if (Array.isArray(alias)) {
        // biome-ignore lint/complexity/noForEach: <explanation>
        alias.forEach((item) => {
          let { find, replacement } = item;
          if (!replacement.startsWith(config.envDir)) return;
          if (find instanceof RegExp) find = find.source;
          Replace2Find[replacement] = find;
        });
      } else {
        // biome-ignore lint/complexity/noForEach: <explanation>
        Object.entries(alias).forEach(([key, value]) => {
          if (!filter(value)) return;
          Replace2Find[value as string] = key;
        });
      }
      findRegExp = new RegExp(Object.values(Replace2Find).join('|'));
      replaceRegExp = new RegExp(Object.keys(Replace2Find).sort((a, b) => b.length - a.length).join('|'));

    },

    async transform(code, id) {
      
      if (!filter(id)) return;
        const ctxReplace = id.match(replaceRegExp)?.[0];
        const ctxDir = dirname(id);

        const ast = this.parse(code);
        for (const item of ast.body) {
          if (item.type === 'ImportDeclaration') {

            const { source } = item;
            const importSource =source.value as string

            if (findRegExp.test(importSource)) continue

            const resolvedId = await this.resolve(importSource, id);
            if (resolvedId) {
        // if (id.includes('demo.vue')&& importSource === '../hooks') debugger

              const { id: importPath } = resolvedId;
              if (!filter(importPath) || importPath.startsWith(ctxDir) || findRegExp.test(importPath)) continue
              // if (ctxReplace && importPath.startsWith(ctxReplace)) continue
              const importCtxReaplace = importPath.match(replaceRegExp)?.[0];
              if (importCtxReaplace !== ctxReplace) {
                // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                const start = (item as any).start as number;

                const message = `【${importSource}】请使用${Replace2Find[importCtxReaplace as string]}引入 `;
                this.error(message, start);
              }
            }
          }
        }
    },


  } as Plugin;
}
