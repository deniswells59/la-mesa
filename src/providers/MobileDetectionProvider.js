import React, { createContext, useContext, useState, useEffect } from 'react';

const MobileDetectionCtx = createContext(null);

const isMobile = (width) => width <= 767;

const MobileDetectionProvider = ({ children }) => {
  const [mobileFlag, setMobileFlag] = useState({
    isMobile: isMobile(window.innerWidth),
  });

  useEffect(() => {
    const handleResize = () => {
      setMobileFlag({
        isMobile: isMobile(window.innerWidth),
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <MobileDetectionCtx.Provider value={mobileFlag}>{children}</MobileDetectionCtx.Provider>;
};

export default MobileDetectionProvider;
export const useMobileDetection = () => useContext(MobileDetectionCtx);
