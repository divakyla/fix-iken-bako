import type { NextPage } from "next";
import { memo, useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import PoppUpppFrame from "./popp-uppp-frame";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";
import styles from "./desktop2.module.css";
const Desktop2: NextPage = memo(() => {
  const [isPoppUpppFrameOpen, setPoppUpppFrameOpen] = useState(false);
  const router = useRouter();

  const openPoppUpppFrame = useCallback(() => {
    setPoppUpppFrameOpen(true);
  }, []);

  const closePoppUpppFrame = useCallback(() => {
    setPoppUpppFrameOpen(false);
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <>
      <div className={styles.suggBox}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <Input.TextArea
              className={styles.inputtextarea}
              bordered={false}
              style={{ width: "397.42401123046875px" }}
              size="large"
              placeholder="意見を入力してください"
              maxLength={250}
            />
          </div>
          <div
            className={styles.rectangleContainer}
            onClick={openPoppUpppFrame}
          >
            <div className={styles.groupInner} />
            <button className={styles.button}>送信</button>
          </div>
          <div className={styles.div}>意見箱</div>
          <img className={styles.arrowIcon} alt="" src="/arrow-1.svg" />
        </div>
        <div className={styles.groupDiv} onClick={onGroupContainer3Click}>
          <div className={styles.rectangleDiv} />
          <img className={styles.groupIcon} alt="" src="/group-11.svg" />
        </div>
      </div>
      {isPoppUpppFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePoppUpppFrame}
        >
          <PoppUpppFrame onClose={closePoppUpppFrame} />
        </PortalPopup>
      )}
    </>
  );
});

export default Desktop2;
