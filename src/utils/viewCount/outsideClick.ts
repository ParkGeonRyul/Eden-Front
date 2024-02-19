import { useEffect } from 'react';

const useClickOutside = (
  callback: () => void,
  ref: React.RefObject<HTMLElement>,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [callback, ref]);
};

export default useClickOutside;
