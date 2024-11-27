import { useEffect, useState } from "react";
import gsap from "gsap";

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0); // Current slide index
  const [isSliderActive, setIsSliderActive] = useState(true); // Whether the slider is active or not

  useEffect(() => {
    const handleScroll = (event) => {
      const sliderElement = document.querySelector(".slider");

      // Check if the user is in the slider section
      const sliderRect = sliderElement.getBoundingClientRect();
      if (sliderRect.top < window.innerHeight && sliderRect.bottom > 0) {
        setIsSliderActive(true);
      } else {
        setIsSliderActive(false);
        return; // Exit if not in the slider section
      }

      if (!isSliderActive) return;

      // Determine scroll direction
      if (event.deltaY > 0) {
        // Scrolling down
        if (currentSlide < 2) {
          setCurrentSlide((prev) => prev + 1);
          event.preventDefault();
        }
      } else {
        // Scrolling up
        if (currentSlide > 0) {
          setCurrentSlide((prev) => prev - 1);
          event.preventDefault();
        }
      }
    };

    // Add event listener for wheel scroll
    window.addEventListener("wheel", handleScroll, { passive: false });

    // Cleanup listener
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSlide, isSliderActive]);

  useEffect(() => {
    // GSAP animations for the current slide
    gsap.fromTo(
      `.slide-${currentSlide + 1} .hero-heading`,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
    );
    gsap.fromTo(
      `.slide-${currentSlide + 1} .hero-subheading`,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power4.out" }
    );
  }, [currentSlide]);

  return (
    <>
<div className="slider relative w-full h-screen overflow-hidden">
  <div
    className={`hero-section slide-1 bg-gray-100 absolute top-0 left-0 w-screen h-screen flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
      currentSlide === 0 ? "opacity-100" : "opacity-0"
    }`}
  >
    <div className="text-center">
      <h1 className="hero-heading text-4xl font-bold text-black">Ash Innovations</h1>
      <p className="hero-subheading text-xl text-black mt-4 px-4 md:px-12">
        Revolutionizing interior design with precision, creativity, and cutting-edge solutions tailored to your vision.
      </p>
    </div>
  </div>

        <div
          className={`hero-section slide-2 bg-gray-100 absolute top-0 left-0 w-screen h-screen flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            currentSlide === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center">
            <h1 className="hero-heading text-4xl font-bold text-black">
              Innovative Solutions
            </h1>
            <p className="hero-subheading text-xl text-black mt-4 px-4 md:px-12">
              We provide advanced interior design solutions with a focus on
              functionality, aesthetics, and sustainability.
            </p>
          </div>
        </div>

        <div
          className={`hero-section slide-3 bg-gray-100 absolute top-0 left-0 w-full h-screen flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            currentSlide === 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center">
            <h1 className="hero-heading text-4xl font-bold text-black">
              Tailored Designs
            </h1>
            <p className="hero-subheading text-xl text-black mt-4 px-4 md:px-12">
              Each design is custom-made to suit the unique needs and
              preferences of our clients, blending style with purpose.
            </p>
          </div>
        </div>
      </div>

      {/* Content outside the slider */}
      <div className="p-8 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-semibold">Welcome to the rest of the page</h2>
        <p className="mt-4 text-lg text-gray-700">
          This is where the normal page content goes. You can now scroll freely
          after leaving the slider section.
        </p>
      </div>
    </>
  );
}
