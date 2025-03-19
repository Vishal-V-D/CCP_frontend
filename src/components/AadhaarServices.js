import React from "react";
import { useNavigate } from "react-router-dom";

const AadhaarServices = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn"); // Check login status
    if (isLoggedIn) {
      navigate(path);
    } else {
      navigate("/login"); // Redirect to login if not logged in
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerBox}>
        <h2 style={styles.headerTitle}>🛡️ Observance of Vigilance Awareness Week 2024</h2>
        <p style={styles.headerText}>
          From 28.10.2024 to 03.11.2024 on theme{" "}
          <strong>"Culture of Integrity for Nation's Prosperity"</strong>
        </p>
        <a onClick={() => handleNavigation("/integrity-pledge")} style={styles.link}>
          Integrity Pledge →
        </a>
      </div>

      <div style={styles.section}>
        <div style={styles.serviceBox}>
          <h3 style={styles.serviceTitle}>🔄 Update Aadhaar</h3>
          <p style={styles.greenText}>Keep your Aadhaar details up-to-date.</p>
          <p style={styles.serviceText}>
            It is essential that your Aadhaar Data is correct and remains updated always.
          </p>
          <div style={styles.linkContainer}>
            <a onClick={() => handleNavigation("/aadhaar-status")} style={styles.link}>
              Check Aadhaar Update Status
            </a>{" "}
            |{" "}
            <a onClick={() => handleNavigation("/update-aadhaar")} style={styles.link}>
              Update Demographics Data & Check Status
            </a>
          </div>
        </div>

        <div style={styles.serviceBox}>
          <h3 style={styles.serviceTitle}>📜 Get Aadhaar</h3>
          <p style={styles.greenText}>Aadhaar is for every Resident of India.</p>
          <p style={styles.serviceText}>
            From a newborn to a senior citizen, everyone can enroll for Aadhaar.
          </p>
          <div style={styles.linkContainer}>
            <a onClick={() => handleNavigation("/appointment")} style={styles.link}>
              Book an Appointment
            </a>{" "}
            |{" "}
            <a onClick={() => handleNavigation("/aadhaar-status")} style={styles.link}>
              Check Aadhaar Status
            </a>{" "}
            |{" "}
            <a onClick={() => handleNavigation("/download-aadhaar")} style={styles.link}>
              Download Aadhaar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  headerBox: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    borderLeft: "5px solid #f0ad4e",
    marginBottom: "20px",
  },
  headerTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  headerText: {
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  section: {
    marginTop: "20px",
  },
  serviceBox: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    borderLeft: "5px solid #007bff",
    marginBottom: "15px",
  },
  serviceTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#0056b3",
  },
  greenText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#28a745",
  },
  serviceText: {
    fontSize: "14px",
    color: "#666",
    marginTop: "5px",
  },
  linkContainer: {
    marginTop: "8px",
    fontSize: "14px",
  },
};

export default AadhaarServices;
