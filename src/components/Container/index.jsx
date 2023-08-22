import React from "react";
import styles from "@/components/Container/Container.module.css";
import Image from "next/image";
import Link from "next/link";

const Container = () => {
  return (
    <div className={`${styles.container} ${styles.wrapper}`}>
      <main className={styles.main}>
        <article>
          <h2 className={styles.article_title}>
            <Link href="#">
              タイトルテキストテキストテキストテキストテキスト
            </Link>
          </h2>
          <ul className={styles.meta}>
            <li>
              <Link href="#">2020/01/01</Link>
            </li>
            <li>
              <Link href="#">カテゴリ1</Link>
            </li>
          </ul>
          <Link href="#">
            <Image
              src="/img/cooltext441555946653111.png"
              alt="たかブログ"
              width="200"
              height="64"
            />
          </Link>
          <p className={styles.text}>
            本文テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <div className={styles.readmore}>
            <Link href="#">READ MORE</Link>
          </div>
        </article>

        <article>
          <h2 className={styles.article_title}>
            <Link href="#">
              タイトルテキストテキストテキストテキストテキスト
            </Link>
          </h2>
          <ul className={styles.meta}>
            <li>
              <Link href="#">2020/01/01</Link>
            </li>
            <li>
              <Link href="#">カテゴリ1</Link>
            </li>
          </ul>
          <Link href="#">
            <Image
              src="/img/cooltext441555946653111.png"
              alt="たかブログ"
              width="200"
              height="64"
            />
          </Link>
          <p className={styles.text}>
            本文テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <div className={styles.readmore}>
            <Link href="#">READ MORE</Link>
          </div>
        </article>

        <article>
          <h2 className={styles.article_title}>
            <Link href="#">
              タイトルテキストテキストテキストテキストテキスト
            </Link>
          </h2>
          <ul className={styles.meta}>
            <li>
              <Link href="#">2020/01/01</Link>
            </li>
            <li>
              <Link href="#">カテゴリ1</Link>
            </li>
          </ul>
          <Link href="#">
            <Image
              src="/img/cooltext441555946653111.png"
              alt="たかブログ"
              width="200"
              height="64"
            />
          </Link>
          <p className={styles.text}>
            本文テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <div className={styles.readmore}>
            <Link href="#">READ MORE</Link>
          </div>
        </article>
      </main>

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
    </div>
  );
};

export default Container;
