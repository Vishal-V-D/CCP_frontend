import React, { useState } from "react";
import uidaiLogo from "../assets/uidai_english_logo.svg";
import aadhaarLogo from "../assets/aadhaar_english_logo.svg";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <div>
      {/* Top Section */}
      <div style={styles.topBar}>
        <div style={styles.leftContent}>
          <img src={uidaiLogo} alt="Government Logo" style={styles.logo} />
        </div>

        <div style={styles.rightContent}>
          <button style={styles.button}>Main Content</button>
          <button style={styles.button}>+ A A - A</button>
          <button style={styles.button}>Screen Reader</button>
          <select style={styles.language}>
            <option>English</option>
            <option>हिन्दी</option>
          </select>
          <img src={aadhaarLogo} style={styles.aadhaarLogo} alt="Aadhaar Logo" />
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav style={styles.navbar}>
        {[
          { label: "My Aadhaar", submenu: ["Download Aadhaar", "Update Aadhaar", "Verify Aadhaar"] },
          { label: "About UIDAI", submenu: ["History", "Vision & Mission", "Organizational Structure"] },
          { label: "Ecosystem", submenu: ["Aadhaar Services", "Authentication", "Enrolment Centers"] },
          { label: "Media & Resources", submenu: ["Press Releases", "Reports", "Publications"] },
          { label: "Contact & Support", submenu: ["Grievance Redressal", "Help Center", "FAQs"] },
        ].map((item, index) => (
          <div
            key={index}
            style={styles.navItem}
            onMouseEnter={() => toggleDropdown(item.label)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            {item.label} ▼
            {dropdown === item.label && (
              <div style={styles.dropdown}>
                {item.submenu.map((subItem, subIndex) => (
                  <p key={subIndex} style={styles.dropdownItem}>
                    {subItem}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <input type="text" placeholder="Search..." style={styles.searchInput} />
          <button style={styles.searchButton}>Go</button>
        </div>
      </nav>
    </div>
  );
};

const styles = {
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #ccc",
    background: "#f5f5f5",
  },
  leftContent: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "300px",
    marginRight: "10px",
  },
  rightContent: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    background: "none",
    border: "none",
    color: "#002147",
    cursor: "pointer",
    marginRight: "10px",
    fontSize: "14px",
  },
  language: {
    padding: "5px",
    fontSize: "14px",
    marginRight: "10px",
  },
  aadhaarLogo: {
    width: "100px",
  },
  navbar: {
    display: "flex",
    alignItems: "center",
    background: "#002147",
    padding: "10px 20px",
    position: "relative",
  },
  navItem: {
    color: "white",
    fontSize: "16px",
    padding: "10px 15px",
    cursor: "pointer",
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: "0",
    background: "white",
    color: "black",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    minWidth: "180px",
    padding: "10px 0",
    borderRadius: "5px",
    zIndex: "1000", /* Ensures dropdown is above everything */
  },
  dropdownItem: {
    padding: "8px 15px",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  searchContainer: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    padding: "5px",
    fontSize: "14px",
    border: "none",
    borderRadius: "3px 0 0 3px",
  },
  searchButton: {
    background: "#004aad",
    color: "white",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer",
    borderRadius: "0 3px 3px 0",
  },
};

export default Navbar;
