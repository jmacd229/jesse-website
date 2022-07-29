import { useEffect, useState } from 'react';

const useCurrentUrl = (): string => {
  const [currentUrl, setCurrentUrl] = useState('/');
  useEffect(() => setCurrentUrl(window.location.pathname), []);
  return currentUrl;
};

export default useCurrentUrl;
