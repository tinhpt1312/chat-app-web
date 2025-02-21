"use client";
import { createContext, ReactNode, useState, useContext, useEffect } from "react";
import { IRegisterRequest } from "../types/auth";
import { useRouter } from "next/navigation";
import { useLogin, useLogout, useRegister } from "../hooks/api";
import { ILoginRequest } from "../types/auth";
import AuthAPI from "../service/auth";

interface IAuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  login: (data: ILoginRequest) => void;
  register: (data: IRegisterRequest) => void;
  logout: () => void;
  setIsAuthenticated: (value: boolean) => void;
}

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const loginMutation = useLogin();
  const registerMutation = useRegister();
  const logoutMutation = useLogout();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await AuthAPI.checkAuth();
        setIsAuthenticated(response.statusCode === 200);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (data: ILoginRequest) => {
    try {
      const response = await loginMutation.mutateAsync(data);
      if (response.statusCode === 200) {
        setIsAuthenticated(true);
        router.push("/chat");
      } else {
        throw new Error(response.message || "Đăng nhập thất bại");
      }
    } catch (error: any) {
      console.error("Login failed:", error);
      throw new Error(error.response?.data?.message || error.message || "Đăng nhập thất bại");
    }
  };

  const register = async (data: IRegisterRequest) => {
    try {
      await registerMutation.mutateAsync(data);
      router.push("/login");
    } catch (error) {
      console.error("Register failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutMutation.mutateAsync();
      setIsAuthenticated(false);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loading,
        login,
        register,
        logout,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
