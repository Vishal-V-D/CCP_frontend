import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About UIDAI</h1>
        <p>The Unique Identification Authority of India (UIDAI) was established by the Government of India...</p>
      </div>

      <div className="about-content">
        <h2>What We Do</h2>
        <p>
          UIDAI issues Aadhaar numbers to residents, maintains the database, and ensures security for biometric data.
        </p>

        <h2>Our Mission</h2>
        <p>
          To provide a unique identity to every resident of India, ensuring transparency and digital governance.
        </p>
      </div>
    </div>
  );
}

export default About;

