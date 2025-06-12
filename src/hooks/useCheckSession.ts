import { useAuthStore } from "@/store/useAuthStore";
import axios from "@/api/axiosInstance";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useCheckSession = () => {
  const { logout, setAuth } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    const checkSession = async () => {
      const response = await axios.post(
        "/identity/verify",
        {},
        { withCredentials: true }
      );
      if (response.data?.authenticated) {
        setAuth(response.data.userName);
      } else {
        logout();
        navigate("/login");
      }
    };
    checkSession();
  }, []);
};
