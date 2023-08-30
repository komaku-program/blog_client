import React, { useEffect, useState } from "react";
import styles from "@/components/Footer/Footer.module.css";
import Link from "next/link";
import TwitterTimeline from "@/components/TwitterTimeline/index";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.content} ${styles.wrapper}`}>
        <section className={styles.item}>
          <h3 className={styles.footer_title}>About me</h3>
          <p className={styles.profile}>
            これまで7年間、医療・福祉の分野で看護師・保育士として働いていました。
            将来性があり、日々多くの学びを得ることができる分野で働きたいと思い、2022年4月よりプログラミングの学習を開始しました。
            同年10月にWeb系エンジニアとしてフルリモートの会社に内定をいただき、約半年間インターンとして働きました。
            しかし2023年7月に会社の都合で内定取り消しとなってしまったため、転職活動を再開しています。
          </p>
          <ul className={styles.about_list}>
            <li>
              <div className={styles.readmore}>
                <Link href="#">プロフィール詳細</Link>
              </div>
            </li>
          </ul>
        </section>

        <section className={styles.item}>
          <h3 className={styles.footer_title}>Portfolio</h3>
          <ul className={styles.menu_list}>
            <li>
              <Link href="/">たかブログ（このブログです）</Link>
            </li>
            <li>
              <Link href="#"></Link>
            </li>
          </ul>
        </section>

        <section className={styles.item}>
          <h3 className={styles.footer_title}>Twitter</h3>
          <TwitterTimeline />
        </section>
      </div>
      <div className={styles.under}>
        <p className={styles.copyright}>&copy; TAKA Blog</p>
      </div>
    </footer>
  );
};

export default Footer;
