import React, { createContext, useContext, useState, useEffect } from 'react';

const MobileDetectionCtx = createContext({ isMobile: false });

const isMobile = (width) => width <= 767;

const MobileDetectionProvider = ({ children }) => {
  const [mobileFlag, setMobileFlag] = useState({ isMobile: false });

  const resetMobileFlag = () => {
    setMobileFlag({
      isMobile: isMobile(window.innerWidth),
    });
  };

  useEffect(() => {
    resetMobileFlag();

    const handleResize = () => {
      resetMobileFlag();
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
