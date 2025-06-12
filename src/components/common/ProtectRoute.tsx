import { useAuthStore } from "@/store/useAuthStore";
import { Navigate } from "react-router-dom";

interface ProtectRouteProps {
  children: React.ReactElement;
}

export default function ProtectRoute({ children }: ProtectRouteProps) {
  const { authenticated } = useAuthStore();
  return authenticated ? children : <Navigate to="/login" replace />;
}
