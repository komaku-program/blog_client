import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Side/Side.module.css";

const Side = () => {
  return (
    <aside className={styles.sidebar}>
      <section className={styles.author}>
        <Image
          src="/img/cooltext441555946653111.png"
          alt="たかブログ"
          width="200"
          height="64"
        />
        <h3 className={styles.side_title}>Name Name</h3>
        <p className={styles.profile}>
          プロフィールテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </section>

      <section className={styles.ranking}>
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
      </section>
    </aside>
  );
};

export default Side;
