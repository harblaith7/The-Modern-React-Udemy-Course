import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export default function Nav() {
  const { user } = useSelector((state: RootState) => state.user.value);

  return (
    <nav className="py-5 text-sm font-semibold flex items-center justify-between">
      <div>
        <Link to="/search" className="mr-3">
          Find a ride
        </Link>
        <Link to="/dashboard/post">Post a ride</Link>
      </div>
      <h1 className="text-center mr-5 text-4xl font-bold text-orange-500">
        Poparide
      </h1>
      {user ? <a href="">Sign out</a> : <Link to="/login">Sign in</Link>}
    </nav>
  );
}
