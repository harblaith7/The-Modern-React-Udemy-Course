import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../supabase";
import { Session } from "@supabase/supabase-js";

export default function LoginPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        console.log(session);
        setSession(session);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google"]}
        redirectTo="http://localhost:5174/dashboard"
      />
    );
  } else {
    return <div>Logged in!</div>;
  }
}
