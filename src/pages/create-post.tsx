import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ImageUploadForm from "@/components/ImageUploadForm/index";
import Head from "next/head";
import Header from "@/components/Header/index";
import styles from "@/styles/Home.module.css";

type FormInputs = {
  title: string;
  content: string;
};

const CreatePost: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onChange", // リアルタイムバリデーション
  });

  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const router = useRouter();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts`, {
        title: data.title,
        content: data.content,
        thumbnailUrl: thumbnailUrl,
      });
      router.push("/");
    } catch (err) {
      alert("投稿に失敗しました");
    }
  };

  return (
    <div>
      <Head>
        <title>たかブログ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className={styles.create_section}>
        <h1>ブログ新規投稿</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.from}>
            <label>タイトル</label>
            <input
              type="text"
              {...register("title", {
                required: "タイトルは必須です",
                maxLength: {
                  value: 30,
                  message: "タイトルは30文字以内で入力してください",
                },
              })}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>

          <br />

          <div className={styles.form}>
            <label>本文</label>
            <textarea
              rows={20}
              cols={100}
              {...register("content", {
                required: "本文は必須です",
                maxLength: {
                  value: 5000,
                  message: "本文は5000文字以内で入力してください",
                },
              })}
            />
          </div>
          {errors.content && <p>{errors.content.message}</p>}

          <ImageUploadForm setThumbnailUrl={setThumbnailUrl} />

          <button className="button" type="submit">
            投稿
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
