import React from "react";

const Detail = () => {
  return (
    <div style={styles.container}>
      {/* Left Section - FAQ */}
      <div style={styles.leftSection}>
        <h2 style={styles.heading}>Frequently Asked Questions</h2>
        <div style={styles.faqBox}>Virtual ID (VID)</div>
        <div style={styles.faqBox}>mAadhaar FAQs</div>
        <div style={styles.faqBox}>Aadhaar Authentication History</div>
        <div style={styles.faqBox}>Secure QR Code Reader (beta)</div>
        <div style={styles.faqBox}>Aadhaar Paperless Offline e-KYC</div>
        <a href="#" style={styles.viewAll}>View All</a>
      </div>

      {/* Right Section - Aadhaar Services */}
      <div style={styles.rightSection}>
        <h1 style={styles.heading}>Avail Aadhaar Services</h1>
        <div style={styles.serviceCard}>
          <h3>Verify Aadhaar &gt;</h3>
          <p>Aadhaar number can be verified to check if it is valid and active.</p>
          <a href="#" style={styles.link}>Verify an Aadhaar Number</a>
        </div>
        <div style={styles.serviceCard}>
          <h3>Verify Registered Mobile or Email ID &gt;</h3>
          <p>Verify your email or mobile linked to Aadhaar.</p>
          <a href="#" style={styles.link}>Verify Email/Mobile Number</a>
        </div>
        <div style={styles.serviceCard}>
          <h3>Retrieve Aadhaar &gt;</h3>
          <p>Retrieve your lost Aadhaar number via registered mobile.</p>
          <a href="#" style={styles.link}>Retrieve Lost or Forgotten EID/UID</a>
        </div>
      </div>
    </div>
  );
};

// Internal CSS Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  },
  leftSection: {
    width: "30%",
    padding: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    marginRight: "20px",
  },
  rightSection: {
    width: "60%",
    padding: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  faqBox: {
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#f1f3f4",
    borderRadius: "5px",
    cursor: "pointer",
  },
  viewAll: {
    display: "block",
    textAlign: "right",
    marginTop: "10px",
    color: "#007bff",
    textDecoration: "none",
  },
  serviceCard: {
    padding: "15px",
    borderRadius: "5px",
    backgroundColor: "#f1f3f4",
    marginBottom: "15px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Detail;
