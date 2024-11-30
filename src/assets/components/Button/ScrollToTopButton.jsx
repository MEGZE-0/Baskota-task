import React, { useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down 100px from top
  const checkScrollTop = () => {
    if (!isVisible && window.pageYOffset > 100) {
      setIsVisible(true);
    } else if (isVisible && window.pageYOffset <= 100) {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  // Attach the scroll event listener
  React.useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [isVisible]);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-[#1A1919] text-[#F4C890] p-3 rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ display: isVisible ? "block" : "none" }}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
