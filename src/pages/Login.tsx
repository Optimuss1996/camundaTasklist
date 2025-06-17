import { useForm } from "react-hook-form";
import { useLogin } from "@/services/reactQuery/useLogin";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
type LoginFormData = {
  username: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate, isPending } = useLogin();
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();
  const onSubmit = (data: LoginFormData) => {
    console.log("فرم ارسال شد:", data);

    mutate(data, {
      onSuccess: (res) => {
        if (res.authenticated) {
          toast.success("خوش آمدید");
          navigate("/taskboard");
          setAuth(res.authenticatedUser);
          console.log("username account : ", res.authenticatedUser);
        } else {
          toast.error("نام کاربری یا رمز عبور اشتباه است.");
        }
      },
      onError: () => {
        toast.error("خطا در ارتباط با سرور.");
      },
    });
  };

  return (
    <div className="flex flex-col gap-8   items-center justify-center min-h-screen bg-custom-neutral05 p-4 ">
      <div className=" flex justify-center items-center">
        <img
          src="/images/logo/HafariLogo.png"
          alt="HafariLogo"
          className="w-32 object-contain"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm space-y-4 bg-white p-6 rounded-3xl border border-custom-neutral03"
      >
        <h1 className="text-xl font-bold text-center">ورود به سیستم</h1>

        <div>
          <label className="block mb-1 font-medium">نام کاربری</label>
          <Input
            placeholder="نام کاربری خود را وارد کنید"
            type="text"
            {...register("username", { required: "نام کاربری الزامی است" })}
            className=" placeholder:text-custom-neutral02 placeholder:text-xs h-12"
          />
          {errors.username && (
            <p className="text-sm text-red-500 mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">رمز عبور</label>
          <Input
            placeholder="رمز عبور خود را وارد کنید"
            type="password"
            {...register("password", { required: "رمز عبور الزامی است" })}
            className=" placeholder:text-custom-neutral02 placeholder:text-xs h-12"
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" isLoading={isPending} className="w-full h-12">
          ورود
        </Button>
      </form>
    </div>
  );
}
