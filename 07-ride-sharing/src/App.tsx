import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import { useDispatch } from "react-redux";
import { loadingUser, initializeUser } from "./features/userSlice";
import { supabase } from "./supabase";

function App() {
  const dispatch = useDispatch();

  const loadUser = async () => {
    dispatch(loadingUser());
    const { data } = await supabase.auth.getUser();
    if (data && data.user) {
      const id = data.user.id;
      const email = data.user.email as string;
      const avatarUrl = data.user.user_metadata.avatar_url as string;
      const name = data.user.user_metadata.full_name as string;

      dispatch(
        initializeUser({
          id,
          email,
          avatarUrl,
          name,
        })
      );
    } else {
      dispatch(initializeUser(null));
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <div className="w-[800px] m-auto bg-white text-black">
        <Nav />
        <Outlet />
      </div>
    </>
  );
}

export default App;
