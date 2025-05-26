import { useState, useEffect } from "react";

export const useScroll = (threshold = 50) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > threshold) {
        setHasScrolled(true);
        setIsScrollingUp(currentScroll < lastScrollTop);
      } else {
        setHasScrolled(false);
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, threshold]);

  return { hasScrolled, isScrollingUp };
};
