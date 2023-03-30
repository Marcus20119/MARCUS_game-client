import { useRef, useEffect } from 'react';

export const useIsMounted = () => {
  const isMounted = useRef<boolean>(false);
  useEffect(() => {
    if (isMounted.current === false) {
      isMounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted.current]);
  return { isMounted };
};
