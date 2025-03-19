import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Reach out to UIDAI for queries related to Aadhaar services.</p>
      </div>

      <div className="contact-details">
        <h2>Helpline Numbers</h2>
        <p><strong>Toll-Free:</strong> 1947</p>
        <p><strong>Email:</strong> help@uidai.gov.in</p>

        <h2>Headquarters</h2>
        <p>UIDAI HQ, New Delhi, India</p>
      </div>
    </div>
  );
}

export default Contact;
