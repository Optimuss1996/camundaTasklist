import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSessionQuery from "@/services/reactQuery/useSessionQuery";
import { useAuthStore } from "@/store/useAuthStore";
import Spinner from "@/components/common/Spinner";
const HomeRedirect = () => {
  const { data, isLoading, isError } = useSessionQuery();
  const { setAuth, logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && data) {
      if (data.authenticated && data.authenticatedUser) {
        setAuth(data.authenticatedUser);
        navigate("/taskboard");
      } else {
        logout();
        navigate("/login");
      }
    }

    if (isError) {
      logout();
      navigate("/login");
    }
  }, [isLoading, data, isError]);

  return (
    <div className="flex items-center justify-center h-screen text-muted-foreground text-sm">
      <Spinner />
    </div>
  );
};

export default HomeRedirect;
