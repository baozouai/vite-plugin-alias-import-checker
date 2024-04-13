import type { FC } from 'react'


import { constValue } from '@common/const'
import { useCommon } from '@common/utils'
import { useIsMounted } from './hooks';
import Demo from './components/demo'
import Log1 from './components/log1'




const index: FC = () => {

  const isMounted = useIsMounted()

useCommon()

  return (
    <div>
      <h1>app.tsx constValue: { constValue }</h1>
      <h2>app.tsx mounted: { isMounted }</h2>
      <br/> 
      <Demo /> 
      <Log1 /> 
    </div>
  )
}


export default index
