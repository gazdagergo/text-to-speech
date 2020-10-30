import React from "react";
import Speech from "./speech";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Text to speech próba</h1>
      <Speech lang="hu-HU" text="Jónapot kívánok" pause resume />
    </div>
  );
}
