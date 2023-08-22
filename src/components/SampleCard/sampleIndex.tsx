import React from "react";
import styles from "@/components/SampleCard/SampleCard.module.css";
import { Post } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  posts: Post[];
};

const Card = ({ posts }: Props) => {
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
    <div className={styles.card}>
      <div>
        {posts.map((post: Post) => (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.content}</p>
            <Link href={`edit-post/${post.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
