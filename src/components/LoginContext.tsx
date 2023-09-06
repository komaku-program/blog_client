import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";

interface LoginContextProps {
  isLoggedIn: boolean;
  handleLoginSuccess: () => void;
  handleLogout: () => void;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // この部分でサーバーに問い合わせる
    const checkLoggedInStatus = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/users/check_login`,
          {
            withCredentials: true,
          }
        );

        if (response.status === 200 && response.data.loggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Failed to check login status:", error);
      }
    };

    checkLoggedInStatus();
  }, []); // 空の依存配列を指定して、この副作用をコンポーネントがマウントされたときに一度だけ実行する

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/users/sign_out`,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setIsLoggedIn(false);
        // その他のローカルの状態クリア処理（必要であれば）
      }
    } catch (error) {
      console.error("Failed to logout:", error);
      // その他のエラーハンドリング
    }
  };

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, handleLoginSuccess, handleLogout }}
    >
      {children}
    </LoginContext.Provider>
  );
};
