import { Post } from "@/types";
import React from "react";
import styles from "@/components/Container/Container.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

type Props = {
  posts: Post[];
};

const Container = ({ posts }: Props) => {
  const router = useRouter();
  const handleDelete = async (postId: string) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/posts/${postId}`);
      // 今後リロードではなく、non displayなどにすることを検討
      router.reload();
    } catch (err) {
      alert("投稿に失敗しました");
    }
  };
  return (
    <div className={`${styles.container} ${styles.wrapper}`}>
      <main className={styles.main}>
        {posts.map((post: Post) => (
          <article className={styles.article} key={post.id}>
            <div className={styles.date_wrapper}>
              <p className={styles.create_date}>投稿日 2020/01/01</p>
              <p className={styles.edit_date}>更新日 2020/01/01</p>
            </div>
            <Link href={`posts/${post.id}`}>
              <h2 className={styles.article_title}>{post.title}</h2>
            </Link>
            <Link href="#">
              <Image
                className={styles.image}
                src={
                  post.thumbnail
                    ? `http://localhost:3001${post.thumbnail}`
                    : "/img/cooltext441555946653111.png"
                }
                alt="サムネイル画像"
                width={1000}
                height={200}
              />
            </Link>
            <p className={styles.text}>{post.content}</p>
            <div className={styles.readmore}>
              <Link href="#">READ MORE</Link>
            </div>
            <Link href={`edit-post/${post.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </article>
        ))}
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
