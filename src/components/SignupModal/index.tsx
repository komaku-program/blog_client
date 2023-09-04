import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { User } from "@/types";

type FormInputs = User & { password_confirmation: string };

type LoginModalProps = {
  handleCloseModal: () => void;
};

const SignupModal: React.FC<LoginModalProps> = ({ handleCloseModal }) => {
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
      router.push("/"); // 成功したらリダイレクト
    } catch (err) {
      alert("ユーザー登録に失敗しました");
    }
  };

  return (
    <div>
      <div
        className="overlay"
        onClick={(e) => e.target === e.currentTarget && handleCloseModal()}
      ></div>
      <div className="modal">
        <h1>ようこそ</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>ユーザー名</label>
            <input
              type="text"
              {...register("name", {
                required: "ユーザー名は必須です",
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

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
            <label>PW</label>
            <input
              type="password"
              {...register("password", {
                required: "パスワードは必須です",
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div>
            <label>PW(再入力)</label>
            <input
              type="password"
              {...register("password_confirmation", {
                required: "パスワードの確認は必須です",
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <button type="submit">サインアップ</button>
        </form>
        <br />
        <Link href="#">ゲストログイン</Link>
        <br />
        <button onClick={handleCloseModal}>閉じる</button>
      </div>
    </div>
  );
};

export default SignupModal;
