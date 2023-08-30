import { Post } from "@/types";
import axios from "axios";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, use, useState } from "react";

type Props = {
  post: Post;
};

export async function getServerSideProps(context: any) {
  const id = context.params.id;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

const EditPost = ({ post }: Props) => {
  // 後日UseFormなるものを追加予定
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/posts/${post.id}`, {
        title: title,
        content: content,
      });

      router.push("/");
    } catch (err) {
      alert("編集に失敗しました");
    }
  };

  return (
    <div>
      <h1>ブログ編集</h1>
      <form onSubmit={handleSubmit}>
        <label>タイトル</label>
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          value={title}
        />
        <label>本文</label>
        <textarea
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
          value={content}
        />

        <button type="submit">編集</button>
      </form>
    </div>
  );
};

export default EditPost;
