import React from "react";
import HeroSection from "../components/HeroSection";
import AadhaarServices from "../components/AadhaarServices";
import "./Home.css";

function Home() {
  const pressReleases = [
    {
      title: "UIDAI partners with indigenous GenAI Company Sarvam AI to enhance user experience of Aadhaar services.",
      date: "19 Mar 2025",
      downloadLink: "#",
    },
    {
      title: "Aadhaar Drives Digital Transformation: 225 crore authentication transactions in February, Face Auth at record high.",
      date: "10 Mar 2025",
      downloadLink: "#",
    },
  ];
  return (
    <div>
      <HeroSection />
      <AadhaarServices />
      <div style={styles.container}>
      <h2 style={styles.title}>
        📢 Press Release <span style={styles.viewAll}>View All</span>
      </h2>
      <div style={styles.cardContainer}>
        {pressReleases.map((release, index) => (
          <div key={index} style={styles.card}>
            <img
              src="aadhaar-logo.png"
              alt="Aadhaar"
              style={styles.logo}
            />
            <p style={styles.cardTitle}>{release.title}</p>
            <p style={styles.date}>{release.date}</p>
            <a href={release.downloadLink} style={styles.downloadLink}>
              📥 Download
            </a>
            <span style={styles.fileInfo}>| Type: in | Size: 0 KB</span>
          </div>
        ))}
      </div>
    </div>
      <div className="home-info">
        <h2>Why Aadhaar?</h2>
        <p>Aadhaar is a 16-digit unique identity number issued by UIDAI...</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewAll: {
    fontSize: "14px",
    color: "blue",
    cursor: "pointer",
  },
  cardContainer: {
    display: "flex",
    gap: "15px",
  },
  card: {
    width: "320px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    background: "white",
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    width: "40px",
    height: "40px",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  date: {
    fontSize: "14px",
    color: "gray",
  },
  downloadLink: {
    fontSize: "14px",
    textDecoration: "none",
    color: "blue",
    fontWeight: "bold",
  },
  fileInfo: {
    fontSize: "12px",
    color: "gray",
  },
};

export default Home;
