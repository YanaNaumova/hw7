import SwitchLanguage from "../switchLanguage";
import TextComponent from "../textComponent";
import styles from "./styles.module.css";
function MainComponent() {
  const { container } = styles;
  return (
    <div className={container}>
      <TextComponent />
      <SwitchLanguage />
    </div>
  );
}

export default MainComponent;
