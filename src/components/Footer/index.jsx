import React from "react";
import styles from "@/components/Footer/Footer.module.css";

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
              <a href="#" className={styles.arrow}>
                プロフィール詳細
              </a>
            </li>
            <li>
              <a href="#" className={styles.arrow}>
                プロフィール詳細
              </a>
            </li>
            <li>
              <a href="#" className={styles.arrow}>
                プロフィール詳細
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.item}>
          <h3 className={styles.footer_title}>Menu</h3>
          <ul className={styles.menu_list}>
            <li>
              <a href="#">NEW</a>
            </li>
            <li>
              <a href="#">CATEGORY</a>
            </li>
            <li>
              <a href="#">COLUMN</a>
            </li>
            <li>
              <a href="#">SERIES</a>
            </li>
            <li>
              <a href="#">Q&A</a>
            </li>
          </ul>
        </section>

        <section className={styles.item}>
          <h3 className={styles.footer_title}>Twitter</h3>
          <a
            className={styles.twitter_timeline}
            data-height="315"
            href="https://twitter.com/TwitterJP?ref_src=twsrc%5Etfw"
          >
            Tweets by TwitterJP
          </a>
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
