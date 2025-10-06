"use client";

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-5 right-5 z-50"
    >
      <button
        type="button"
        onClick={scrollToTop}
        className="bg-primary cursor-pointer  text-white font-bold py-3 px-3 rounded-full shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
