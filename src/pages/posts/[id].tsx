import { Post } from "@/types";
import { useRouter } from "next/router";
import { type } from "os";
import React from "react";

type Props = {
  post: Post;
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://taka-blog-api-6079246b73b1.herokuapp.com/api/v1/posts"
  );
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
    `https://taka-blog-api-6079246b73b1.herokuapp.com/api/v1/posts/${params.id}`
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
    <div>
      <div>{post.title}</div>
      <div>{post.created_at}</div>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
