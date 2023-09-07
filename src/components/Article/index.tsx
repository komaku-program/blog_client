import React, { useEffect } from "react";
import { Post } from "@/types";
import styles from "@/components/Article/Article.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Linkify from "react-linkify";
import { useLogin } from "@/components/LoginContext";

type Props = {
  post: Post;
  isFullText: boolean;
};

const Article = ({ post, isFullText }: Props) => {
  const { isLoggedIn, userId } = useLogin();
  const scrollRouter = useRouter();
  // useEffectが2回発火してしまい、autoの処理が適切に行われない問題があり修正が必要
  useEffect(() => {
    const element = document.getElementById("article-section");

    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const behavior = scrollRouter.query.from === "pickup" ? "smooth" : "auto";

      window.scrollTo({
        top: elementPosition - offset,
        behavior: behavior,
      });
    }
  }, [scrollRouter.query.from]);

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("ja-JP", options);
  };
  const router = useRouter();
  const handleDelete = async (postId: string) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts/${postId}`
      );
      // 今後リロードではなく、non displayなどにすることを検討
      router.reload();
    } catch (err) {
      alert("投稿に失敗しました");
    }
  };
  return (
    <article id="article-section" className={styles.article} key={post.id}>
      <div className={styles.date_wrapper}>
        <p className={styles.create_date}>
          投稿日 {formatDate(post.created_at)}
        </p>
        <p className={styles.edit_date}>更新日 {formatDate(post.updated_at)}</p>
      </div>
      <Link href={`/posts/${post.id}`}>
        <h2 className={styles.article_title}>{post.title}</h2>
      </Link>
      <Link href={`/posts/${post.id}`}>
        <Image
          className={styles.image}
          src={
            post.thumbnail
              ? `${process.env.NEXT_PUBLIC_API_URL}${post.thumbnail}`
              : "/img/default_image.jpeg"
          }
          alt="サムネイル画像"
          width={1000}
          height={300}
        />
      </Link>
      <p className={`${styles.text} ${isFullText ? "" : styles.truncated}`}>
        <Linkify
          componentDecorator={(decoratedHref, decoratedText, key) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={decoratedHref}
              key={key}
              style={{ color: "blue", fontWeight: "bold" }}
            >
              {decoratedText}
            </a>
          )}
        >
          {post.content}
        </Linkify>
      </p>
      <div className={styles.readmore}>
        {!isFullText && <Link href={`/posts/${post.id}`}>READ MORE</Link>}
      </div>

      {/* 今後実装 */}
      {/* {isLoggedIn && userId === post.user_id && (
        <div className={styles.buttons}>
          <Link href={`edit-post/${post.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      )} */}
    </article>
  );
};

export default Article;
