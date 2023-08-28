import { Post } from "@/types";
import React from "react";
import styles from "@/components/UniversalContainer/UniversalContainer.module.css"; // スタイル名は適宜変更してください
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Side from "../Side";
import Article from "../Article";

type Props = {
  post?: Post;
  posts?: Post[];
};

const UniversalContainer = ({ post, posts }: Props) => {
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

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("ja-JP", options);
  };

  return (
    <div className={`${styles.container} ${styles.wrapper}`}>
      <main className={styles.main}>
        {posts ? (
          posts.map((singlePost: Post) => <Article post={singlePost} />)
        ) : post ? (
          <Article post={post} />
        ) : null}
      </main>
      <Side></Side>
    </div>
  );
};

export default UniversalContainer;
