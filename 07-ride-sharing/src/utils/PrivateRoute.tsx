import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../app/store";

export default function PrivateRoute() {
  const { user, isLoading } = useSelector(
    (state: RootState) => state.user.value
  );

  if (isLoading) return <div>Loading...</div>;

  return user ? <Outlet /> : <Navigate to="/login" />;
}
