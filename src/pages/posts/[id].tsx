import { Post } from "@/types";
import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import Header from "@/components/Header/index";
import Pickup from "@/components/Pickup/index";
import Footer from "@/components/Footer/index";
import UniversalContainer from "@/components/UniversalContainer";

type Props = {
  post: Post;
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${params.id}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

const Post = ({ post }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main_content">
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
