import React from "react";
import styles from "@/components/Pickup/Pickup.module.css";
import Image from "next/image";
import Link from "next/link";

const Pickup = () => {
  return (
    <div id="pickup" className={`${styles.pickup} ${styles.wrapper}`}>
      <article>
        <Link href="#">
          <Image
            className={styles.image}
            src="/img/working.jpg"
            alt="このブログの仕様について"
            width="800"
            height="200"
          />
        </Link>
        <h2 className={styles.article_title}>このブログの仕様について</h2>
        <div className={styles.readmore}>
          <Link href="#">READ MORE</Link>
        </div>
      </article>

      <article>
        <Link href="#">
          <Image
            className={styles.image}
            src="/img/programmer.png"
            alt="学習履歴"
            width="800"
            height="200"
          />
        </Link>
        <h2 className={styles.article_title}>学習履歴</h2>
        <div className={styles.readmore}>
          <Link href="#">READ MORE</Link>
        </div>
      </article>

      <article>
        <Link href="#">
          <Image
            className={styles.image}
            src="/img/climbing.jpg"
            alt="求職活動について"
            width="800"
            height="200"
          />
        </Link>
        <h2 className={styles.article_title}>求職活動について</h2>
        <div className={styles.readmore}>
          <Link href="#">READ MORE</Link>
        </div>
      </article>
    </div>
  );
};

export default Pickup;
