import type { NextPage } from "next";
import { memo } from "react";
import Component from "./component";
import styles from "./popp-uppp-frame.module.css";

type PoppUpppFrameType = {
  onClose?: () => void;
};

const PoppUpppFrame: NextPage<PoppUpppFrameType> = memo(({ onClose }) => {
  return (
    <div className={styles.poppUpppFrame}>
      <Component />
    </div>
  );
});

export default PoppUpppFrame;
