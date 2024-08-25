import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./styles.module.css";

function TextComponent() {
  const { language } = useContext(LanguageContext);
  const { text } = styles;
  return language === "English" ? (
    <h1 className={text}>English language was chosen</h1>
  ) : (
    <h1 className={text}>Русский язык был выбран</h1>
  );
}

export default TextComponent;
