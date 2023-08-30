import axios from "axios";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useState } from "react";
import ImageUploadForm from "@/components/ImageUploadForm/index";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts`, {
        title: title,
        content: content,
        thumbnailUrl: thumbnailUrl, // サムネイル画像の URL を使って投稿
      });

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
        <ImageUploadForm setThumbnailUrl={setThumbnailUrl} />
        <button type="submit">投稿</button>
      </form>
    </div>
  );
};

export default CreatePost;
