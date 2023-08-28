import React from "react";
import styles from "@/components/Header/Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={`${styles.site_title} ${styles.wrapper}`}>
        <Link href="/">
          <Image
            src="/img/cooltext441555946653111.png"
            alt="たかブログ"
            width="200"
            height="64"
          />
        </Link>
      </h1>
      <nav className={styles.navi}>
        <ul className={styles.wrapper}>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="#">管理人の投稿</Link>
          </li>
          <li>
            <Link href="#">みんなの投稿</Link>
          </li>
          <li>
            <Link href="#">自分の投稿</Link>
          </li>
          <li>
            <Link href="/create-post">新規投稿</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
