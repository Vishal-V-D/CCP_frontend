import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Us Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <span className="icon">📞</span> Toll-free: 1947
          </p>
          <p>
            <span className="icon">✉️</span> help@uidai.gov.in
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>🔵</span>
            <span>🔴</span>
            <span>⚪</span>
            <span>🔷</span>
          </div>
        </div>

        {/* UIDAI Head Office Section */}
        <div className="footer-section">
          <h3>UIDAI Head Office</h3>
          <p>Unique Identification Authority of India</p>
          <p>Bangla Sahib Road, Behind Kali Mandir, Gole Market, New Delhi - 110001</p>
        </div>

        {/* Regional Offices Dropdown */}
        <div className="footer-section">
          <h3>Regional Offices</h3>
          <select>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Kolkata</option>
            <option>Chennai</option>
          </select>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>Copyright © 2022 Unique Identification Authority of India. All Rights Reserved.</p>
        <p>JavaScript must be enabled to access this site.</p>
      </div>
    </footer>
  );
};

export default Footer;
