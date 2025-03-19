import React from "react";
import "./LanguageSelector.css";

function LanguageSelector() {
  return (
    <select className="language-selector">
      <option>English</option>
      <option>हिन्दी</option>
      <option>বাংলা</option>
      <option>தமிழ்</option>
    </select>
  );
}

export default LanguageSelector;
