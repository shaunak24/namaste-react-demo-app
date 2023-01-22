import { useEffect, useState } from 'react';

const useOnline = () => {
  // check is user is online
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    const onlineListener = window.addEventListener('online', handleOnline);
    const offlineListener = window.addEventListener('offline', handleOffline);

    // clear event listeners
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline; // returns true or false
};

export default useOnline;
