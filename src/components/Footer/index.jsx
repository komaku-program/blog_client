import React from "react";
import styles from "@/components/Footer/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.content} ${styles.wrapper}`}>
        <section className={styles.item}>
          <h3 className={styles.footer_title}>About</h3>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <ul className={styles.about_list}>
            <li>
              <Link href="#" className={styles.arrow}>
                プロフィール詳細
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.arrow}>
                プロフィール詳細
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.arrow}>
                プロフィール詳細
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.item}>
          <h3 className={styles.footer_title}>Menu</h3>
          <ul className={styles.menu_list}>
            <li>
              <Link href="#">NEW</Link>
            </li>
            <li>
              <Link href="#">CATEGORY</Link>
            </li>
            <li>
              <Link href="#">COLUMN</Link>
            </li>
            <li>
              <Link href="#">SERIES</Link>
            </li>
            <li>
              <Link href="#">Q&A</Link>
            </li>
          </ul>
        </section>

        <section className={styles.item}>
          <h3 className={styles.footer_title}>Twitter</h3>
          <Link
            className={styles.twitter_timeline}
            data-height="315"
            href="https://twitter.com/TwitterJP?ref_src=twsrc%5Etfw"
          >
            Tweets by TwitterJP
          </Link>
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </section>
      </div>
      <div className={styles.under}>
        <p className={styles.copyright}>&copy; Travel &amp; Blog</p>
      </div>
    </footer>
  );
};

export default Footer;
