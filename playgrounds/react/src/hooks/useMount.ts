// 帮我生成useMount这个hook
import { useEffect } from 'react';

export const useMount = (fn: () => void) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fn();
  }, []);
};