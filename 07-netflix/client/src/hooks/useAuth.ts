import axios from "axios";
import Cookie from "universal-cookie";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";

const cookie = new Cookie();

const useAuth = () => {
  const dispatch = useDispatch();

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
    const { token, user } = response.data;
    cookie.set("session_token", token);
    dispatch(
      setUser({
        email: user.email,
        username: user.username,
      })
    );
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
    const { token, user } = response.data;
    cookie.set("session_token", token);
    dispatch(
      setUser({
        email: user.email,
        username: user.username,
      })
    );
    return response.data;
  };

  const fetchUser = () => {};

  return { signup, login, fetchUser };
};

export default useAuth;
