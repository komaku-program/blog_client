import React, { useEffect, useRef } from "react";
import Script from "next/script";

const TwitterTimeline: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-expect-error
    window.twttr?.widgets.load(ref.current);
  }, []);

  return (
    <div ref={ref}>
      <a
        className="twitter-timeline"
        href="https://twitter.com/komaku_program?ref_src=twsrc%5Etfw"
        data-height="270"
      >
        Tweets by komaku_program
      </a>
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
      />
    </div>
  );
};

export default TwitterTimeline;
