import React, { useEffect } from "react";
import { captureEvent } from "./eventTracker";

const EventListenerProvider = ({ children }) => {
  useEffect(() => {
    const trackScreenSize = () => {
      console.log("Tracking Screen Size 📏");
      captureEvent("screen_size", { width: window.innerWidth, height: window.innerHeight });
    };

    const handleKeyPress = (event) => {
      console.log("Key Pressed ⌨️:", event.key);
      captureEvent("keypress", { key: event.key, code: event.code });
    };

    const handleMouseEnter = (event) => {
      console.log("Mouse Moved 🖱️:", { x: event.clientX, y: event.clientY });
      captureEvent("mouse_enter", { x: event.clientX, y: event.clientY });
    };

    window.addEventListener("resize", trackScreenSize);
    window.addEventListener("keydown", handleKeyPress);
    document.addEventListener("mousemove", handleMouseEnter);

    trackScreenSize(); // Initial capture

    return () => {
      window.removeEventListener("resize", trackScreenSize);
      window.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("mousemove", handleMouseEnter);
    };
  }, []);

  return <>{children}</>;
};

export default EventListenerProvider;
