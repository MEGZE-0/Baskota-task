import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState({ width: 15, height: 15 });

  // Update cursor position on mouse movement
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Add mousemove listener for custom cursor
    document.addEventListener("mousemove", updateCursorPosition);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  // Handle mouse enter and leave for resizing cursor
  useEffect(() => {
    const handleHoverEnter = () => {
      setCursorSize({ width: 30, height: 30 });
    };

    const handleHoverLeave = () => {
      setCursorSize({ width: 15, height: 15 });
    };

    // Add event listeners for hover effects
    document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, a, button, img")
      .forEach((element) => {
        element.addEventListener("mouseenter", handleHoverEnter);
        element.addEventListener("mouseleave", handleHoverLeave);
      });

    // Clean up hover listeners
    return () => {
      document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, a, button, img")
        .forEach((element) => {
          element.removeEventListener("mouseenter", handleHoverEnter);
          element.removeEventListener("mouseleave", handleHoverLeave);
        });
    };
  }, []);

  // Styling for the custom cursor and the inner dot
  const cursorStyles = {
    position: "fixed",
    top: `${cursorPosition.y}px`,
    left: `${cursorPosition.x}px`,
    width: `${cursorSize.width}px`,
    height: `${cursorSize.height}px`,
    backgroundColor: "rgb(255, 255, 255)", // White background color for the cursor
    borderRadius: "50%",
    border: "1px solid #ffffff", 
    pointerEvents: "none", 
    zIndex: 9999, 
    transform: "translate(-50%, -50%)", // Centers the cursor
    mixBlendMode: "difference", 
    transition: "width 0.4s ease, height 0.4s ease, border 0.4s ease, background-color 0.4s ease", 
  };

  const cursorDotStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // Center the dot
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#ffffff", // Inner dot color (white)
  };

  return (
    <div style={cursorStyles}>
      <div style={cursorDotStyles}></div> {/* Inner dot */}
    </div>
  );
};

export default CustomCursor;
