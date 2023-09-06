import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { useLogin } from "@/components/LoginContext";

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

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      // ログインAPIを呼び出す
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

      // ログイン成功時の処理
      if (response.status === 200) {
        handleLoginSuccess();
      }

      console.log(response.data); // ログイン成功時の処理
      handleCloseModal();
      // 成功したらホームページにリダイレクト
      router.push("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.response?.data); // ログイン失敗時の処理
      }
      alert("ログインに失敗しました");
    }
  };

  return (
    <div>
      <div
        className="overlay"
        onClick={(e) => e.target === e.currentTarget && handleCloseModal()}
      ></div>
      <div className="modal">
        <h1>おかえりなさい</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input
              type="text"
              {...register("email", {
                required: "Emailは必須です",
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label>パスワード</label>
            <input
              type="password"
              {...register("password", {
                required: "パスワードは必須です",
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <button type="submit">ログイン</button>
        </form>
        <Link href="#" onClick={handleOpenSignupModal}>
          初めての方はこちら
        </Link>
        <br />
        <Link href="#">ゲストログイン</Link>
        <br />
        <button onClick={handleCloseModal}>閉じる</button>
      </div>
    </div>
  );
};

export default LoginModal;
