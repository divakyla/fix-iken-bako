import type { NextPage } from "next";
import { memo, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./menu1.module.css";
const Menu1: NextPage = memo(() => {
  const router = useRouter();

  const onButtonSearchClick = useCallback(() => {
    // Please sync "Purchase history" to the project
  }, []);

  const onButtonSearch1Click = useCallback(() => {
    // Please sync "buy foodVoucher" to the project
  }, []);

  const onButtonSearch2Click = useCallback(() => {
    router.push("/suggestion-box");
  }, [router]);

  const onButtonSearch3Click = useCallback(() => {
    // Please sync "log_in" to the project
  }, []);

  return (
    <div className={styles.menu}>
      <div className={styles.homeScreen}>
        <div className={styles.homeScreenChild} />
        <b className={styles.b}>管理者</b>
        <button className={styles.buttonSearch} onClick={onButtonSearchClick}>
          <b className={styles.b1}>購入履歴</b>
        </button>
        <button className={styles.buttonSearch1} onClick={onButtonSearch1Click}>
          <b className={styles.b2}>食券購入</b>
        </button>
        <button className={styles.buttonSearch2} onClick={onButtonSearch2Click}>
          <b className={styles.b2}>意見箱</b>
        </button>
        <b className={styles.b4}>管理者メニュー</b>
        <img className={styles.iconHome} alt="" src="/-icon-home.svg" />
        <img className={styles.iconFilter} alt="" src="/-icon-filter.svg" />
        <img className={styles.iconDocument} alt="" src="/-icon-document.svg" />
        <img
          className={styles.iconDocumentCheck}
          alt=""
          src="/-icon-document-check.svg"
        />
        <img className={styles.iconLogOut} alt="" src="/-icon-log-out.svg" />
        <button className={styles.buttonSearch3} onClick={onButtonSearch3Click}>
          <b className={styles.b5}>ログアウト</b>
        </button>
        <button className={styles.buttonSearch4}>
          <b className={styles.b6}>
            <span className={styles.txt}>
              <p className={styles.p}>食券購入</p>
              <p className={styles.p}>(外注・接待用)</p>
            </span>
          </b>
        </button>
      </div>
    </div>
  );
});

export default Menu1;
