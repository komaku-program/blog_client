import { Post } from "@/types";
import React, { useState } from "react";
import styles from "@/components/UniversalContainer/UniversalContainer.module.css";
import Side from "../Side";
import Article from "../Article";

type Props = {
  post?: Post;
  posts?: Post[];
};

const UniversalContainer = ({ post, posts }: Props) => {
  const [filterMonth, setFilterMonth] = useState<string | null>(null);

  const filteredPosts = filterMonth
    ? posts?.filter((post) => {
        const postDate = new Date(post.created_at);
        const postMonth = `${postDate.getFullYear()}年${
          postDate.getMonth() + 1
        }月`;
        return postMonth === filterMonth;
      })
    : posts;

  return (
    <div className={`${styles.container} ${styles.wrapper}`}>
      <main className={styles.main}>
        {filteredPosts ? (
          filteredPosts
            .sort(
              (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
            )
            .map((singlePost: Post) => (
              <Article
                key={singlePost.id}
                isFullText={false}
                post={singlePost}
              />
            ))
        ) : post ? (
          <Article key={post.id} isFullText={true} post={post} />
        ) : null}
      </main>
      <Side setFilterMonth={setFilterMonth} />
    </div>
  );
};

export default UniversalContainer;
