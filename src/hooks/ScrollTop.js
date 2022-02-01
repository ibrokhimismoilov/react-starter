import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      })
    }
  }, [pathname])

  return null;
};

export default ScrollTop;