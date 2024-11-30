import { useEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import slide1Image from "../../imges/2-scaled.jpg";
import slide2Image from "../../imges/blue-armchair-against-blue-wall-living-room-interior-elegant-interior-design-with-copy-space-ai-generative-scaled.jpg";
import slide3Image from "../../imges/WhatsApp-Image-2024-08-05-at-15.10.45_1daca405.jpg";
import HistoryOf from "../HistoryOf/HistoryOf";
import Work from "../Work/Work";
import Appointment from "../Appointment/Appointment";
import pic1 from "../../imges/icons8-circuit-100-1.png";
import pic2 from "../../imges/icons8-sand-clock-100.png";
import pic3 from "../../imges/icons8-diamond-100.png";
import pic4 from "../../imges/icons8-safety-hat-100.png";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const sliderRef = useRef(null);
  const cardRefs = useRef([]); // Initialize refs as an empty array

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return; // Ensure slider is available

    const slides = slider.querySelectorAll(".slide");
    if (slides.length === 0) return; // Ensure there are slides available

    const ctx = gsap.context(() => {
      // Main slider animation (horizontal scroll)
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: slider,
          pin: true,
          scrub: 2,
          start: "top top",
          end: `+=${window.innerHeight * (slides.length - 1)}`,
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: 1,
            ease: "power2.inOut",
          },
        },
      });

      // Individual slide animations
      slides.forEach((slide, index) => {
        // Image animation (parallax zoom)
        const image = slide.querySelector("img");
        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.2 },
            {
              scale: 1,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: slide,
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
              },
            }
          );
        }

        // Content animation (fade and slide up)
        const content = slide.querySelectorAll(".content > *");
        if (content.length) {
          gsap.fromTo(
            content,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
              stagger: 0.2,
              scrollTrigger: {
                trigger: slide,
                start: "top 70%",
                end: "top 30%",
                scrub: true,
              },
            }
          );
        }

        // Highlight current slide effect (optional)
        gsap.to(slide, {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: slide,
            start: "top center",
            end: "bottom center",
            scrub: true,
            onEnter: () => console.log(`Slide ${index + 1} entered`),
          },
        });
      });
    }, slider);

    // Cards animation
    if (cardRefs.current.length > 0) {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 50, scale: 0.9, rotate: 5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 1.5,
          ease: "elastic.out(1, 2.5)",
          stagger: 0.4,
          scrollTrigger: {
            trigger: cardRefs.current[0],
            start: "top 100%",
            end: "bottom 15%",
            scrub: 1.5, // Adjust scrub duration to slow down animations
            onUpdate: (self) => {
              const speed = self.getVelocity();
              if (Math.abs(speed) > 1000) {
                self.animation.timeScale(0.5); // Slow down when scrolling fast
              } else {
                self.animation.timeScale(1); // Normal speed otherwise
              }
            },
          },
        }
      );
    }

    return () => ctx.revert();
  }, []);

  return (
    <div className="home">
      {/* Slider Section */}
      <div
        className="slider-container relative w-screen h-screen overflow-hidden"
        ref={sliderRef}
        style={{ display: "flex", flexWrap: "nowrap" }}
      >
        {/* Slide 1 */}
        <div className="slide relative w-screen h-screen flex items-center justify-center bg-black">
          <img
            src={slide1Image}
            alt="Slide 1"
            className="absolute inset-0 object-cover w-full h-full opacity-50"
          />
          <div className="content text-center px-4 md:px-12 relative z-10">
            <h1 className="text-4xl font-bold text-gray-200">
              Ash Innovations
            </h1>
            <p className="text-xl text-gray-200 mt-4">
              Revolutionizing interior design with precision, creativity, and
              cutting-edge solutions tailored to your vision.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide relative w-screen h-screen flex items-center justify-center ">
          <img
            src={slide2Image}
            alt="Slide 2"
            className="absolute inset-0 object-cover w-full h-full opacity-50"
          />
          <div className="content text-center px-4 md:px-12 relative z-10">
            <h1 className="text-4xl font-bold text-gray-200">
              Innovative Solutions
            </h1>
            <p className="text-xl text-gray-200 mt-4">
              We provide advanced interior design solutions with a focus on
              functionality, aesthetics, and sustainability.
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="slide relative w-screen h-screen flex items-center justify-center">
          <img
            src={slide3Image}
            alt="Slide 3"
            className="absolute inset-0 object-cover w-full h-full opacity-50"
          />
          <div className="content text-center px-4 md:px-12 relative z-10">
            <h1 className="text-4xl font-bold text-gray-200">
              Tailored Designs
            </h1>
            <p className="text-xl text-gray-200 mt-4">
              Each design is custom-made to suit the unique needs and
              preferences of our clients, blending style with purpose.
            </p>
          </div>
        </div>
      </div>
      {/* History Section */}
      <HistoryOf />

      {/* Design Foundation Section */}
      <div className="w-full bg-[#1A1919] p-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-left text-4xl xs:text-3xl text-white mb-4">
              The Foundation of Every Design
            </h2>
            <p className="text-left text-2xl  xs:text-lg text-[#A7A7A7] leading-relaxed">
              Our values shape every project we design. We combine 8 years of
              experience with modern technology to create beautiful, functional
              spaces.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                img: pic1,
                title: "Modern Technology",
                bgColor: "bg-[#D9D9D9]",
                description:
                  "We leverage the latest technology to create innovative solutions.",
              },
              {
                img: pic2,
                title: "8 Years Experience",
                bgColor: "bg-[#F4C890]",
                description:
                  "Our team brings over 8 years of experience to every project.",
              },
              {
                img: pic3,
                title: "Brand Recognition",
                bgColor: "bg-[#A7A7A7]",
                description:
                  "We’ve built a strong brand that resonates with clients globally.",
              },
              {
                img: pic4,
                title: "Safety Standards",
                bgColor: "bg-[#8B575C]",
                description:
                  "We prioritize safety in every step of the design process.",
              },
            ].map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)} // Correctly assign refs to each card
                className={`p-6 text-white rounded-3xl`}
                style={{
                  backgroundColor: card.bgColor
                    .replace("bg-[", "")
                    .replace("]", ""),
                }}
              >
                <div className="mb-4 flex justify-center">
                  <img src={card.img} alt={card.title} />
                </div>
                <h5 className="text-2xl font-bold mb-2 text-[#333333]">
                  {card.title}
                </h5>
                <p className="text-[#333333]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Work />

      {/* Appointment Section */}
      <Appointment />
    </div>
  );
}

export default Home;
