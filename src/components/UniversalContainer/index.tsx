import { Post } from "@/types";
import React from "react";
import styles from "@/components/UniversalContainer/UniversalContainer.module.css";
import Side from "../Side";
import Article from "../Article";

type Props = {
  post?: Post;
  posts?: Post[];
};

const UniversalContainer = ({ post, posts }: Props) => {
  return (
    <div className={`${styles.container} ${styles.wrapper}`}>
      <main className={styles.main}>
        {posts ? (
          posts
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
      <Side></Side>
    </div>
  );
};

export default UniversalContainer;
