import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types"; // Import PropTypes

gsap.registerPlugin(ScrollTrigger);

const FadeInSlideUp = ({ children, className }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    gsap.from(element, {
      opacity: 0,
      y: 50, // Starts 50px below
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%", // Starts when element is 80% into the viewport
        end: "bottom center",
        scrub: true, // Smooth animation while scrolling
        markers: false, // Remove markers if not needed for debugging
        toggleActions: "play none none reverse", // Ensure it animates both when entering and leaving the viewport
      },
    });

    return () => {
      // Clean up scrollTrigger to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

// Add prop types validation
FadeInSlideUp.propTypes = {
  children: PropTypes.node.isRequired,  // children can be any valid React node
  className: PropTypes.string, // className should be a string
};

export default FadeInSlideUp;
