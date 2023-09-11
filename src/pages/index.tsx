import { Post } from "@/types";
import Head from "next/head";
import Header from "@/components/Header/index";
import Pickup from "@/components/Pickup/index";
import Footer from "@/components/Footer/index";
import UniversalContainer from "@/components/UniversalContainer";
import React, { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  posts: Post[];
};

export async function getStaticProps() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts`
  );
  const posts = res.data;
  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 24,
  };
}

export default function Home({ posts: initialPosts }: Props) {
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    const fetchNewPosts = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts`
      );
      setPosts(res.data);
    };

    fetchNewPosts();
  }, []);

  return (
    <div className="main_content">
      <Head>
        <title>たかブログ</title>
        <meta
          name="description"
          content="たかブログはプログラミング技術に関する記事を提供するブログサイトです"
        />
        <meta
          name="keywords"
          content="ブログ, 技術, プログラミング, ポートフォリオ, 成果物, 転職, 駆け出しエンジニア, Next.js, rails"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Pickup />
      <UniversalContainer posts={posts} />
      <Footer />
    </div>
  );
}
