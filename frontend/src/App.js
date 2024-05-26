import React from "react";
import SpeakerProfile from "./SpeakerProfile";

function App() {
  const speakerName = "John Wilson";
  return (
    <div style={{ backgroundColor: "gray", margin: 20, color: "white" }}>
      <SpeakerProfile />
    </div>
  );
}

export default App;
