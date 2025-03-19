import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../assets/hero_bg.jpg";
import banner1 from "../assets/DocumentUpdateBanner.jpg";
import banner2 from "../assets/NEET-Web-Banner.jpg";

const HeroSection = () => {
  const navigate = useNavigate(); // Hook for navigation

  const images = [
    { src: banner, link: "https://bhuvan.nrsc.gov.in/aadhaar/" },
    { src: banner1, link: "https://bhuvan.nrsc.gov.in/aadhaar/" },
    { src: banner2, link: "https://bhuvan.nrsc.gov.in/aadhaar/" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleClick = () => {
    window.open(images[currentIndex].link, "_blank"); // Open link in a new tab
  };

  const styles = {
    heroContainer: {
      height: "450px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      padding: "20px",
      overflow: "hidden",
      cursor: "pointer",
    },
    heroBackground: {
      backgroundImage: `url(${images[currentIndex].src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "100%",
      position: "absolute",
      transition: "background-image 1s ease-in-out",
    },
    heroContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "90%",
      maxWidth: "1200px",
      position: "relative",
      zIndex: 1,
    },
    leftSection: {
      maxWidth: "500px",
      color: "#fff",
    },
    mainHeading: {
      color: "#ff6b00",
      fontSize: "36px",
      fontWeight: "bold",
    },
    subHeading: {
      fontSize: "20px",
      color: "#fff",
      marginTop: "5px",
    },
  };

  return (
    <div style={styles.heroContainer} onClick={handleClick}>
      <div style={styles.heroBackground}></div>
      <div style={styles.heroContent}>
        <div style={styles.leftSection}>
         
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
