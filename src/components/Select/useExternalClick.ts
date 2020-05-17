import { useEffect, useRef } from 'react';

export default (handler: any, lock = true) => {
  const ref: any = useRef(null);

  useEffect(() => {
    if (lock) {
      const listener = (event: any) => {
        if (
          !ref.current ||
          ref.current?.contains(event.target) ||
          event.pageX >= document.documentElement.offsetWidth
        ) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }
  }, [ref, handler, lock]);

  return ref;
};
