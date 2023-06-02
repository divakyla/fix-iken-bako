import type { NextPage } from "next";
import { memo } from "react";
import styles from "./component1.module.css";
const Component: NextPage = memo(() => {
  return <div className={styles.div}>送信を完了しました！</div>;
});

export default Component;
