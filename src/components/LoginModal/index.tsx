import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { useLogin } from "@/components/LoginContext";
import styles from "@/styles/Modal.module.css";
import style from "@/styles/Home.module.css";

type FormInputs = {
  email: string;
  password: string;
};

type LoginModalProps = {
  handleCloseModal: () => void;
  handleOpenSignupModal: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({
  handleCloseModal,
  handleOpenSignupModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onChange",
  });

  const router = useRouter();

  const { handleLoginSuccess } = useLogin();

  const handleGuestLogin = async () => {
    try {
      const guestData = {
        email: "gestlogin@gmail.com",
        password: "gestlogin",
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/sign_in`,
        {
          user: {
            email: guestData.email,
            password: guestData.password,
            remember_me: true,
          },
        },
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        handleLoginSuccess(response.data.user.id, response.data.user.name);
      }

      handleCloseModal();
      router.push("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.response?.data);
      }
      alert("ゲストログインに失敗しました");
    }
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/sign_in`,
        {
          user: {
            email: data.email,
            password: data.password,
            remember_me: true,
          },
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        handleLoginSuccess(response.data.user.id, response.data.user.name);
      }

      console.log(response.data);
      handleCloseModal();
      router.push("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.response?.data);
      }
      alert("ログインに失敗しました");
    }
  };

  return (
    <div>
      <div
        className={styles.overlay}
        onClick={(e) => e.target === e.currentTarget && handleCloseModal()}
      ></div>
      <div className={styles.modal}>
        <h1>おかえりなさい</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className={styles.label}>
              &nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;
            </label>
            <input
              className={styles.input}
              type="text"
              {...register("email", {
                required: "Emailは必須です",
              })}
            />
            {errors.email && (
              <p className={styles.message}>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label>パスワード</label>
            <input
              className={styles.input}
              type="password"
              {...register("password", {
                required: "パスワードは必須です",
              })}
            />
            {errors.password && (
              <p className={styles.message}>{errors.password.message}</p>
            )}
          </div>

          <button className={styles.login_button} type="submit">
            ログイン
          </button>
        </form>
        <Link
          className={styles.signup}
          href="#"
          onClick={handleOpenSignupModal}
        >
          初めての方はこちら
        </Link>
        <br />
        <button className={styles.guest_button} onClick={handleGuestLogin}>
          ゲストログイン
        </button>
        <br />
        <button className={styles.close_button} onClick={handleCloseModal}>
          閉じる
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
