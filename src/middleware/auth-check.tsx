import Cookies from "js-cookie";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
export const AuthCheck = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    if ((token && pathname == "/login") || pathname == "/register") {
      navigate("/");
    }
  }, [token, navigate, pathname]);

  return <Outlet />;
};
