import React, { useState } from "react";

const LoginPage = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Mock Aadhaar Database
  const validAadhaarNumbers = ["1234567890123456", "9876543210987654"];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Aadhaar (16-digit number)
    if (!/^\d{16}$/.test(aadhaarNumber)) {
      setError("Aadhaar number must be a 16-digit number.");
      setMessage("");
      return;
    }

    setError("");

    // Check if Aadhaar exists in mock database
    if (validAadhaarNumbers.includes(aadhaarNumber)) {
      setMessage("✅ Login Successful!");
    } else {
      setMessage("❌ Invalid Aadhaar Number.");
    }
  };

  return (
    <div style={styles.container}>
   

      <div style={styles.loginBox}>
        <h2 style={styles.title}>Login to Aadhaar via OTP</h2>
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Enter Aadhaar Number</label>
          <input
            type="text"
            maxLength="16"
            placeholder="Enter Aadhaar Number"
            value={aadhaarNumber}
            onChange={(e) => setAadhaarNumber(e.target.value)}
            required
            style={styles.input}
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>
            Login With OTP
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    padding: "20px",
    minHeight: "100vh",
  },
  header: {
    marginBottom: "20px",
  },
  logo: {
    width: "100px",
    marginBottom: "10px",
  },
  heading: {
    color: "#333",
    marginBottom: "5px",
  },
  subHeading: {
    color: "#666",
  },
  loginBox: {
    background: "white",
    width: "350px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    color: "#333",
    marginBottom: "15px",
  },
  label: {
    display: "block",
    textAlign: "left",
    margin: "10px 0 5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#0066cc",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    width: "100%",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
  message: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default LoginPage;
