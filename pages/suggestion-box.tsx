import type { NextPage } from "next";
import Desktop2 from "../components/desktop2";
import styles from "./suggestion-box.module.css";
const SuggestionBox: NextPage = () => {
  return (
    <div className={styles.suggestionBox}>
      <Desktop2 />
    </div>
  );
};

export default SuggestionBox;
