import React from "react";
import styles from "@/components/Pickup/Pickup.module.css";

const Pickup = () => {
  return (
    <div id="pickup" className={`${styles.pickup} ${styles.wrapper}`}>
      <article>
        <img src="#" alt="テキストテキストテキスト" />
        <h2 className={styles.article_title}>
          タイトルテキストテキストテキストテキストテキストテキストテキスト
        </h2>
        <div className={styles.readmore}>
          <a href="#">READ MORE</a>
        </div>
      </article>

      <article>
        <img src="#" alt="テキストテキストテキスト" />
        <h2 className={styles.article_title}>
          タイトルテキストテキストテキストテキストテキストテキストテキスト
        </h2>
        <div className={styles.readmore}>
          <a href="#">READ MORE</a>
        </div>
      </article>

      <article>
        <img src="#" alt="テキストテキストテキスト" />
        <h2 className={styles.article_title}>
          タイトルテキストテキストテキストテキストテキストテキストテキスト
        </h2>
        <div className={styles.readmore}>
          <a href="#">READ MORE</a>
        </div>
      </article>
    </div>
  );
};

export default Pickup;
