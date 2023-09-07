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
  userId: string | null;
  userName: string | null;
  handleLoginSuccess: (
    userIdFromResponse: string | number,
    name: string
  ) => void;
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
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
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
          setUserId(response.data.userId);
          setUserName(response.data.user.name);
        } else {
          setIsLoggedIn(false);
          setUserId(null);
        }
      } catch (error) {
        console.error("Failed to check login status:", error);
      }
    };

    checkLoggedInStatus();
  }, []); // 空の依存配列を指定して、この副作用をコンポーネントがマウントされたときに一度だけ実行する

  const handleLoginSuccess = (
    userIdFromResponse: string | number,
    name: string
  ) => {
    setIsLoggedIn(true);
    setUserId(String(userIdFromResponse));
    setUserName(name);
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
        setUserId(null);
      }
    } catch (error) {
      console.error("Failed to logout:", error);
      // その他のエラーハンドリング
    }
  };

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, userId, userName, handleLoginSuccess, handleLogout }}
    >
      {children}
    </LoginContext.Provider>
  );
};
