import axios from "axios";
import Cookie from "universal-cookie";

const cookie = new Cookie();

const useAuth = () => {
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const response = await axios.post("http://localhost:8080/auth/login", {
      email,
      password,
    });
    const { token } = response.data;
    cookie.set("session_token", token);
    return response.data;
  };

  const signup = async ({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }) => {
    const response = await axios.post("http://localhost:8080/auth/signup", {
      email,
      password,
      username,
    });
    const { token } = response.data;
    cookie.set("session_token", token);
    return response.data;
  };

  const fetchUser = () => {};

  return { signup, login, fetchUser };
};

export default useAuth;
