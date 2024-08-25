import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./styles.module.css";

const { btn } = styles;

function SwitchLanguage() {
  const { language, setLanguage } = useContext(LanguageContext);

  function changeLanguage() {
    setLanguage(language === "English" ? "Russich" : "English");
  }

  return (
    <button className={btn} onClick={changeLanguage}>
      Switch Language
    </button>
  );
}

export default SwitchLanguage;
