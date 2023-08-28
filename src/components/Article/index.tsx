import React from "react";
import { Post } from "@/types";
import styles from "@/components/Article/Article.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

type Props = {
  post: Post;
  isFullText: boolean;
};

const Article = ({ post, isFullText }: Props) => {
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
      await axios.delete(`http://localhost:3001/api/v1/posts/${postId}`);
      // 今後リロードではなく、non displayなどにすることを検討
      router.reload();
    } catch (err) {
      alert("投稿に失敗しました");
    }
  };
  return (
    <article className={styles.article} key={post.id}>
      <div className={styles.date_wrapper}>
        <p className={styles.create_date}>
          投稿日 {formatDate(post.created_at)}
        </p>
        <p className={styles.edit_date}>更新日 {formatDate(post.updated_at)}</p>
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
              : "/img/default_image.jpeg"
          }
          alt="サムネイル画像"
          width={1000}
          height={200}
        />
      </Link>
      <p className={`${styles.text} ${isFullText ? "" : styles.truncated}`}>
        {post.content}
      </p>
      <div className={styles.readmore}>
        <Link href="#">READ MORE</Link>
      </div>
      <Link href={`edit-post/${post.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => handleDelete(post.id)}>Delete</button>
    </article>
  );
};

export default Article;
