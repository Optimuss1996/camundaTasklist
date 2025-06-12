import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "@/components/ui/Button";
import { IoExitOutline } from "react-icons/io5";

export default function LogoutButton() {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <Button
      onClick={handleLogout}
      className="flex items-center justify-start gap-2 hover:bg-red-100
       hover:text-red-400 bg-transparent cursor-pointer"
    >
      <IoExitOutline className="text-red-400 !size-6 opacity-70" />
      <span className="text-red-400">خروج از حساب</span>
    </Button>
  );
}
