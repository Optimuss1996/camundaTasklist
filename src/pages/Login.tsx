import { useLogin } from "@/services/reactQuery/useAuth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { LoginForm } from "@/components/login/LoginForm";
import { toast } from "react-hot-toast";

interface LoginFormData {
  username: string;
  password: string;
}

export default function Login() {
  const { mutate, isPending } = useLogin();
  const { register, handleSubmit } = useForm<LoginFormData>();
  const navigate = useNavigate();

  async function onSubmit(data: LoginFormData) {
    mutate(data, {
      onSuccess: (res) => {
        if (res.authenticated) {
          toast.success("خوش آمدید");
          navigate("/taskboard");
        } else {
          toast.error("نام کاربری یا رمز عبور اشتباه است");
        }
      },
      onError: (error) => {
        toast.error("خطایی در ارتباط با سرور رخ داده ");
        console.log(error);
      },
    });
  }

  return (
    <div className="flex items-center justify-center h-screen w-full max-w-[1920px] mx-auto bg-custom-neutral04">
      {/* ------------------------Desktop Layout--------------------- */}
      <div className="md:flex hidden gap-4 items-center justify-center h-[600px] w-full rounded-lg">
        <div className="w-1/2 h-full">
          <img
            src="/images/logo/HafariPlatform.webp"
            alt="Hafari Platform"
            className="w-full h-full object-cover rounded-bl-[100px] rounded-tl-[100px] filter brightness-90 "
          />
        </div>
        <div className="w-1/2 p-4 ">
          <div className="flex justify-center items-center mb-10">
            <img
              src="/images/logo/HafariLogo.png"
              alt="Hafari Platform"
              className="w-32 object-cover"
            />
          </div>
          <LoginForm
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            isPending={isPending}
          />
        </div>
      </div>

      {/*---------------------- Mobile Layout---------------------- */}
      <div className="md:hidden w-full">
        <div className="p-4">
          <div className="flex justify-center items-center mb-10">
            <img
              src="/images/logo/HafariLogo.png"
              alt="Hafari Platform"
              className="w-32 object-cover"
            />
          </div>
          <LoginForm
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            isPending={isPending}
          />
        </div>
      </div>
    </div>
  );
}
