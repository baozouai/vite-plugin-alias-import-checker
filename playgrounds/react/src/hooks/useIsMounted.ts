import { useEffect, useState } from 'react'

export function useIsMounted() {
  const [isMountd, setMounted] = useState(false)
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setMounted(true)
  }, [])

  return isMountd
}
