import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // small delay to allow page content to render before scrolling
    const id = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);

    return () => clearTimeout(id);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
