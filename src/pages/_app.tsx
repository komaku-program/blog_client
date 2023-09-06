import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LoginProvider } from "@/components/LoginContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoginProvider>
      <Component {...pageProps} />
    </LoginProvider>
  );
}
