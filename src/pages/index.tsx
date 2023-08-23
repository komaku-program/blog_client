import { Post } from "@/types";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/index";
import Pickup from "@/components/Pickup/index";
import Container from "@/components/Container/index";
import Footer from "@/components/Footer/index";

type Props = {
  posts: Post[];
};

export async function getStaticProps() {
  const res = await fetch(
    "https://taka-blog-api-6079246b73b1.herokuapp.com/api/v1/posts"
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 24,
  };
}

export default function Home({ posts }: Props) {
  const router = useRouter();
  const handleDelete = async (postId: string) => {
    try {
      await axios.delete(
        `https://taka-blog-api-6079246b73b1.herokuapp.com/api/v1/posts/${postId}`
      );
      // 今後リロードではなく、non displayなどにすることを検討
      router.reload();
    } catch (err) {
      alert("投稿に失敗しました");
    }
  };

  return (
    <div className="main_content">
      <Head>
        <title>たかブログ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <Header />
      <Pickup />
      <Container />
      <Footer />

      <h2>たかブログ</h2>
      <Link href="/create-post">Create new Post</Link>
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
}
