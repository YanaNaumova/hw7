import { useState } from "react";
import "./App.css";
import { LanguageContext } from "./context/LanguageContext";
import MainComponent from "./components/mainComponent";

function App() {
  const [language, setLanguage] = useState("English");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <MainComponent />
    </LanguageContext.Provider>
  );
}

export default App;
