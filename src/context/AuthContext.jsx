import React, { createContext, useCallback, useState } from "react";
import {
  loginService,
  signupService,
  verifyingTokenService,
} from "../services/authServices";

export const AuthContext = createContext({});

const initialState = {
  id: null,
  email: null,
  username: null,
  password: null,
  authStatus: true,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (form) => {
    const data = await loginService(form);
    setAuth({
      id: data.data.id,
      email: data.data.email,
      username: data.data.username,
      password: data.data.password,
      authStatus: true,
    });
    localStorage.setItem("token", data.token);
    console.log("iniciando sesion");
  };

  const signup = async (form) => {
    const data = await signupService(form);
    setAuth({
      id: data.data.id,
      email: data.data.email,
      username: data.data.username,
      password: data.data.password,
    });
    localStorage.setItem("token", data.token);
  };

  const verifyingToken = useCallback(async () => {
    console.log('Ejecutando....')
    const token = localStorage.getItem("token");
    if (token) {
      const resp = await verifyingTokenService();

      localStorage.setItem("token", resp.token);

      setAuth({
        id: resp.data.id,
        username: resp.data.username,
        email: resp.data.email,
        password: resp.data.password,
        authStatus: true,
      });
    } else {
      console.log("No existe un token válido");
      setAuth({
        id: null,
        username: null,
        email: null,
        password: null,
        authStatus: false,
      });
    }
  },[]);

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({
      id: null,
      username: null,
      email: null,
      password: null,
      authStatus: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{ auth, login, signup, verifyingToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
