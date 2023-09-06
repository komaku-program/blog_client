import React, { useState } from "react";
import styles from "@/components/Header/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import LoginModal from "@/components/LoginModal/index";
import SignupModal from "../SignupModal";
import { useLogin } from "@/components/LoginContext";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignupModal, setIsSignupModal] = useState(false);

  const { isLoggedIn, handleLogout } = useLogin();

  const handleLogoutClick = () => {
    handleLogout();
  };

  const handleOpenModal = (signup: boolean = false) => {
    setIsSignupModal(signup);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.header}>
      <h1 className={`${styles.site_title} ${styles.wrapper}`}>
        <Link href="/">
          <Image
            src="/img/cooltext441555946653111.png"
            alt="たかブログ"
            width="200"
            height="64"
          />
        </Link>
      </h1>
      <nav className={styles.navi}>
        <ul className={styles.wrapper}>
          <li>
            <Link href="/">HOME</Link>
          </li>
          {/* 以下はログイン機能実装後に使用 */}
          {/* <li>
            <Link href="#">管理人の投稿</Link>
          </li>
          <li>
            <Link href="#">みんなの投稿</Link>
          </li>
          <li>
            <Link href="#">自分の投稿</Link>
          </li> */}
          <li>
            <Link href="/create-post">新規投稿</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogoutClick}>ログアウト</button>
            ) : (
              <button onClick={() => handleOpenModal()}>ログイン</button>
            )}
          </li>
        </ul>
      </nav>
      {showModal &&
        (isSignupModal ? (
          <SignupModal
            handleCloseModal={handleCloseModal}
            handleOpenSignupModal={() => handleOpenModal(false)}
          />
        ) : (
          <LoginModal
            handleCloseModal={handleCloseModal}
            handleOpenSignupModal={() => handleOpenModal(true)}
          />
        ))}
    </div>
  );
};

export default Header;
