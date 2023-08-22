import React from "react";
import styles from "@/components/Pickup/Pickup.module.css";
import Image from "next/image";
import Link from "next/link";

const Pickup = () => {
  return (
    <div id="pickup" className={`${styles.pickup} ${styles.wrapper}`}>
      <article>
        <Image
          src="/img/cooltext441555946653111.png"
          alt="たかブログ"
          width="200"
          height="64"
        />
        <h2 className={styles.article_title}>
          タイトルテキストテキストテキストテキストテキストテキストテキスト
        </h2>
        <div className={styles.readmore}>
          <Link href="#">READ MORE</Link>
        </div>
      </article>

      <article>
        <Image
          src="/img/cooltext441555946653111.png"
          alt="たかブログ"
          width="200"
          height="64"
        />
        <h2 className={styles.article_title}>
          タイトルテキストテキストテキストテキストテキストテキストテキスト
        </h2>
        <div className={styles.readmore}>
          <Link href="#">READ MORE</Link>
        </div>
      </article>

      <article>
        <Image
          src="/img/cooltext441555946653111.png"
          alt="たかブログ"
          width="200"
          height="64"
        />
        <h2 className={styles.article_title}>
          タイトルテキストテキストテキストテキストテキストテキストテキスト
        </h2>
        <div className={styles.readmore}>
          <Link href="#">READ MORE</Link>
        </div>
      </article>
    </div>
  );
};

export default Pickup;
