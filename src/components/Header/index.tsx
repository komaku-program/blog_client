import React from "react";
import styles from "@/components/Header/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={`${styles.site_title} ${styles.wrapper}`}>
        <a href="#">
          <Image
            src="/img/cooltext441555946653111.png"
            alt="たかブログ"
            objectFit={"cover"}
            width="200"
            height="64"
          />
        </a>
      </h1>
      <nav className={styles.navi}>
        <ul className={styles.wrapper}>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">管理者の投稿</a>
          </li>
          <li>
            <a href="#">みんなの投稿</a>
          </li>
          <li>
            <a href="#">自分の投稿</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
