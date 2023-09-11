import { Post } from "@/types";
import { useRouter } from "next/router";
import axios from "axios";
import React from "react";
import Head from "next/head";
import Header from "@/components/Header/index";
import Pickup from "@/components/Pickup/index";
import Footer from "@/components/Footer/index";
import UniversalContainer from "@/components/UniversalContainer";
import style from "@/styles/Home.module.css";

type Props = {
  post: Post;
};

export async function getStaticPaths() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts`
    );
    const posts: Post[] = await res.data;
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`API response error: ${error.message}`);
    } else {
      console.error("An unknown error occurred");
    }
    return {
      paths: [],
      fallback: true,
    };
  }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts/${params.id}`
    );
    const post = await res.data;
    return {
      props: {
        post,
      },
      revalidate: 60,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`API response error: ${error.message}`);
    } else {
      console.error("An unknown error occurred");
    }
    return {
      paths: [],
      fallback: true,
    };
  }
}

const Post = ({ post }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.main_content}>
      <Head>
        <title>たかブログ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Pickup />
      <UniversalContainer post={post} />
      <Footer />
    </div>
  );
};

export default Post;
