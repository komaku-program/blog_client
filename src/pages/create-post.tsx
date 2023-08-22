import axios from "axios";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useState } from "react";

const CreatePost = () => {
  // 後日UseFormなるものを追加予定
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://taka-blog-api-6079246b73b1.herokuapp.com/api/v1/posts",
        {
          title: title,
          content: content,
        }
      );

      router.push("/");
    } catch (err) {
      alert("投稿に失敗しました");
    }
  };

  return (
    <div>
      <h1>ブログ新規投稿</h1>
      <form onSubmit={handleSubmit}>
        <label>タイトル</label>
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <label>本文</label>
        <textarea
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
        />

        <button type="submit">投稿</button>
      </form>
    </div>
  );
};

export default CreatePost;
