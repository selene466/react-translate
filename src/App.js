import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field.js";
import Languages from "./components/languages.js";
import Translate from "./components/translate.js";

export default function App() {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");

  return (
    <div>
      <Field label="Enter Text" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
