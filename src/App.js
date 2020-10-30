import React, { useState } from "react";
import Speech from "./speech";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("Jónapot kívánok");
  return (
    <div className="App">
      <h1>Szövegből beszéd</h1>
      <textarea
        onChange={({ target: { value } }) => setText(value)}
        style={{ width: "50%", minHeight: 100 }}
        value={text}
      />
      <br />
      <br />
      <Speech lang="hu-HU" text={text} pause resume />
      <br />
      <br />
      <p style={{ fontSize: 11 }}>info@gazdagergo.com</p>
    </div>
  );
}
