import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiUrl } from "@/lib/api";

export function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    let isMounted = true;
    const checkSession = async () => {
      try {
        const response = await fetch(`${apiUrl}/auth/me`, {
          credentials: "include",
        });
        if (!isMounted) {
          return;
        }
        if (response.ok) {
          setStatus("authed");
        } else {
          setStatus("guest");
          navigate("/login", { replace: true, state: { from: location.pathname } });
        }
      } catch (err) {
        if (!isMounted) {
          return;
        }
        setStatus("guest");
        navigate("/login", { replace: true, state: { from: location.pathname } });
      }
    };

    checkSession();
    return () => {
      isMounted = false;
    };
  }, [apiUrl, location.pathname, navigate]);

  if (status === "checking") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-muted-foreground">
        Checking session...
      </div>
    );
  }

  return children;
}
