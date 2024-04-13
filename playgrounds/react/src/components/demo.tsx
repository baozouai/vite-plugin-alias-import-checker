// import { constValue } from '../common'
// import { constValue } from '@common/const'
import { constValue } from '@common'
// please use @hooks to import instead of【../hooks】
import { useIsMounted } from '../hooks';
// import { useIsMounted } from '@hooks';
import Log1 from './log1'


export default function Demo() {
const isMounted = useIsMounted()

  return (
    <div>
  <h2>demo.tsx: constValue: { constValue }</h2>
  <h2>demo.tsx:isMounted: { isMounted }</h2>
  <Log1 />
</div>
  )
}