import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { User } from "@/types";
import styles from "@/styles/Modal.module.css";

type FormInputs = User & { password_confirmation: string };

type LoginModalProps = {
  handleCloseModal: () => void;
  handleOpenSignupModal: () => void;
};

const SignupModal: React.FC<LoginModalProps> = ({
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

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        user: {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        },
      });
      console.log("Closing SignupModal...");
      handleOpenSignupModal();
      console.log("Opening LoginModal...");
    } catch (err) {
      alert("ユーザー登録に失敗しました");
      console.error("API Error:", err);
    }
  };

  return (
    <div>
      <div
        className={styles.overlay}
        onClick={(e) => e.target === e.currentTarget && handleCloseModal()}
      ></div>
      <div className={styles.modal}>
        <h1>ようこそ</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              autoComplete="email"
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
            <label className={styles.label}>&nbsp;&nbsp;PW&nbsp;&nbsp;</label>
            <input
              className={styles.input}
              autoComplete="off"
              type="password"
              {...register("password", {
                required: "パスワードは必須です",
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div>
            <label className={styles.label}>PW(再入力)</label>
            <input
              className={styles.input}
              autoComplete="off"
              type="password"
              {...register("password_confirmation", {
                required: "パスワードの確認は必須です",
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div>
            <label className={styles.label}>&nbsp;ユーザー名&nbsp;</label>
            <input
              className={styles.input}
              autoComplete="off"
              type="text"
              {...register("name", {
                required: "ユーザー名は必須です",
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <button className={styles.login_button} type="submit">
            サインアップ
          </button>
        </form>
        <button className={styles.close_button} onClick={handleCloseModal}>
          閉じる
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
