import type { NextPage } from "next";
import Menu1 from "../components/menu1";
import styles from "./index.module.css";
const Menu: NextPage = () => {
  return (
    <div className={styles.menu}>
      <Menu1 />
    </div>
  );
};

export default Menu;
