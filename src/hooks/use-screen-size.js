import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  return isMobile;
} 

export default useScreenSize;