export const captureEvent = (eventType, eventData) => {
    const eventLog = {
      eventType,
      eventData,
      timestamp: new Date().toISOString(),
    };
  
    // ✅ Debugging: Log event before sending
    console.log("Captured Event:", eventLog);
  
    // Send to backend (check for errors)
    sendToBackend(eventLog);
  };
  
  const sendToBackend = async (eventLog) => {
    try {
      const response = await fetch("http://127.0.0.1:5000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventLog),
      });
  
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
  
      console.log("Event sent successfully! ✅");
    } catch (error) {
      console.error("Error sending event:", error);
    }
  };
  