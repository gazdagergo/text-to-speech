import React, { useState } from "react";
import Speech from "./speech";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("Jónapot kívánok");
  const [language, setLanguage] = useState("hu-HU");

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
      <select
        value={language}
        onChange={({ target: { value } }) => setLanguage(value)}
      >
        <option value="hu-HU">magyar</option>
        <option value="en-EN">angol</option>
        <option value="de-DE">német</option>
        <option value="fr-FR">franica</option>
      </select>
      <br />
      <br />
      <Speech lang={language} text={text} pause resume />
      <br />
      <br />
      <p style={{ fontSize: 11 }}>info@gazdagergo.com</p>
    </div>
  );
}
