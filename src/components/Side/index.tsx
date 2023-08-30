import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Side/Side.module.css";

const Side = () => {
  return (
    <aside className={styles.sidebar}>
      <section className={styles.author}>
        <Link href="#">
          <Image
            src="/img/IMG_5771 2.JPG"
            alt="プロフィール写真"
            width="200"
            height="64"
          />
        </Link>
        <h3 className={styles.side_title}>平林 亮之</h3>
        <p className={styles.profile}>
          これまで7年間、医療・福祉の分野で看護師・保育士として働いていました。
          将来性があり、日々多くの学びを得ることができる分野で働きたいと思い、2022年4月よりプログラミングの学習を開始しました。
          同年10月にWeb系エンジニアとしてフルリモートの会社に内定をいただき、約半年間インターンとして働きました。
          しかし2023年7月に会社の都合で内定取り消しとなってしまったため、転職活動を再開しています。
        </p>
        <div className={styles.readmore}>
          <Link href="#">プロフィール詳細</Link>
        </div>
      </section>

      {/* <section className={styles.ranking}>
        <h3 className={styles.side_title}>Ranking</h3>
        <article>
          <Link href="#">
            <Image
              src="/img/cooltext441555946653111.png"
              alt="たかブログ"
              width="200"
              height="64"
            />
            <h4 className={styles.article_title}>
              タイトルテキストテキストテキストテキストテキストテキスト
            </h4>
          </Link>
        </article>

        <article>
          <Link href="#">
            <Image
              src="/img/cooltext441555946653111.png"
              alt="たかブログ"
              width="200"
              height="64"
            />
            <h4 className={styles.article_title}>
              タイトルテキストテキストテキストテキストテキストテキスト
            </h4>
          </Link>
        </article>

        <article>
          <Link href="#">
            <Image
              src="/img/cooltext441555946653111.png"
              alt="たかブログ"
              width="200"
              height="64"
            />
            <h4 className={styles.article_title}>
              タイトルテキストテキストテキストテキストテキストテキスト
            </h4>
          </Link>
        </article>
      </section>

      <section className={styles.archive}>
        <h3 className={styles.side_title}>Archive</h3>
        <ul>
          <li>
            <Link href="#">XXXX年XX月</Link>(XX)
          </li>
          <li>
            <Link href="#">XXXX年XX月</Link>(XX)
          </li>
          <li>
            <Link href="#">XXXX年XX月</Link>(XX)
          </li>
          <li>
            <Link href="#">XXXX年XX月</Link>(XX)
          </li>
          <li>
            <Link href="#">XXXX年XX月</Link>(XX)
          </li>
          <li>
            <Link href="#">XXXX年XX月</Link>(XX)
          </li>
          <li>
            <Link href="#">XXXX年XX月</Link>(XX)
          </li>
          <li>
            <Link href="#">XXXX年XX月</Link>(XX)
          </li>
          <li>
            <Link href="#">XXXX年XX月</Link>(XX)
          </li>
          <li>
            <Link href="#">XXXX年XX月</Link>(XX)
          </li>
          <li>
            <Link href="#">XXXX年XX月</Link>(XX)
          </li>
          <li>
            <Link href="#">XXXX年XX月</Link>(XX)
          </li>
          <li>
            <Link href="#">XXXX年XX月</Link>(XX)
          </li>
          <li>
            <Link href="#">XXXX年XX月</Link>(XX)
          </li>
          <li>
            <Link href="#">XXXX年XX月</Link>(XX)
          </li>
        </ul>
      </section> */}
    </aside>
  );
};

export default Side;
