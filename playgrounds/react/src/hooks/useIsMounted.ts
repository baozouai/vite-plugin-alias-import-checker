import { useEffect, useState } from 'react';

export const useIsMounted = () => {
  const [isMountd, setMounted] = useState(false);
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setMounted(true)
  }, []);

  return isMountd
};