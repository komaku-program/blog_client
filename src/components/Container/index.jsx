import React from "react";
import styles from "@/components/Container/Container.module.css";

const Container = () => {
  return (
    <div className={`${styles.container} ${styles.wrapper}`}>
      <main className={styles.main}>
        <article>
          <h2 className={styles.article_title}>
            <a href="#">タイトルテキストテキストテキストテキストテキスト</a>
          </h2>
          <ul class="meta">
            <li>
              <a href="#">2020/01/01</a>
            </li>
            <li>
              <a href="#">カテゴリ1</a>
            </li>
          </ul>
          <a href="#">
            <img src="#" alt="テキストテキストテキスト" />
          </a>
          <p className={styles.text}>
            本文テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <div className={styles.readmore}>
            <a href="#">READ MORE</a>
          </div>
        </article>

        <article>
          <h2 className={styles.article_title}>
            <a href="#">タイトルテキストテキストテキストテキストテキスト</a>
          </h2>
          <ul class="meta">
            <li>
              <a href="#">2020/01/01</a>
            </li>
            <li>
              <a href="#">カテゴリ1</a>
            </li>
          </ul>
          <a href="#">
            <img src="#" alt="テキストテキストテキスト" />
          </a>
          <p className={styles.text}>
            本文テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <div className={styles.readmore}>
            <a href="#">READ MORE</a>
          </div>
        </article>

        <article>
          <h2 className={styles.article_title}>
            <a href="#">タイトルテキストテキストテキストテキストテキスト</a>
          </h2>
          <ul class="meta">
            <li>
              <a href="#">2020/01/01</a>
            </li>
            <li>
              <a href="#">カテゴリ1</a>
            </li>
          </ul>
          <a href="#">
            <img src="#" alt="テキストテキストテキスト" />
          </a>
          <p className={styles.text}>
            本文テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <div className={styles.readmore}>
            <a href="#">READ MORE</a>
          </div>
        </article>
      </main>

      <aside className={styles.sidebar}>
        <section className={styles.author}>
          <img src="#" alt="テキストテキストテキスト" />
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
            <a href="#">
              <img src="#" alt="テキストテキストテキスト" />
              <h4 className={styles.article_title}>
                タイトルテキストテキストテキストテキストテキストテキスト
              </h4>
            </a>
          </article>

          <article>
            <a href="#">
              <img src="#" alt="テキストテキストテキスト" />
              <h4 className={styles.article_title}>
                タイトルテキストテキストテキストテキストテキストテキスト
              </h4>
            </a>
          </article>

          <article>
            <a href="#">
              <img src="#" alt="テキストテキストテキスト" />
              <h4 className={styles.article_title}>
                タイトルテキストテキストテキストテキストテキストテキスト
              </h4>
            </a>
          </article>
        </section>

        <section className={styles.archive}>
          <h3 className={styles.side_title}>Archive</h3>
          <ul>
            <li>
              <a href="#">XXXX年XX月</a>(XX)
            </li>
            <li>
              <a href="#">XXXX年XX月</a>(XX)
            </li>
            <li>
              <a href="#">XXXX年XX月</a>(XX)
            </li>
            <li>
              <a href="#">XXXX年XX月</a>(XX)
            </li>
            <li>
              <a href="#">XXXX年XX月</a>(XX)
            </li>
            <li>
              <a href="#">XXXX年XX月</a>(XX)
            </li>
            <li>
              <a href="#">XXXX年XX月</a>(XX)
            </li>
            <li>
              <a href="#">XXXX年XX月</a>(XX)
            </li>
            <li>
              <a href="#">XXXX年XX月</a>(XX)
            </li>
            <li>
              <a href="#">XXXX年XX月</a>(XX)
            </li>
            <li>
              <a href="#">XXXX年XX月</a>(XX)
            </li>
            <li>
              <a href="#">XXXX年XX月</a>(XX)
            </li>
            <li>
              <a href="#">XXXX年XX月</a>(XX)
            </li>
            <li>
              <a href="#">XXXX年XX月</a>(XX)
            </li>
            <li>
              <a href="#">XXXX年XX月</a>(XX)
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
};

export default Container;
