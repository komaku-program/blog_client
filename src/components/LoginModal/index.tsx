import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

// あとで修正
type FormInputs = {
  email: string;
  password: string;
};

type LoginModalProps = {
  handleCloseModal: () => void;
  handleOpenSignInModal: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({
  handleCloseModal,
  handleOpenSignInModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onChange",
  });

  const router = useRouter();

  // 修正必要
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts`, {
        title: data.email,
        content: data.password,
      });
      router.push("/");
    } catch (err) {
      alert("投稿に失敗しました");
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
        <Link href="#" onClick={handleOpenSignInModal}>
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
