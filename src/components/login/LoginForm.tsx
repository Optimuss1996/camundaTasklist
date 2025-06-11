import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/login/FormField";
import type { UseFormRegister, UseFormHandleSubmit } from "react-hook-form";

interface LoginFormData {
  username: string;
  password: string;
}

interface LoginFormProps {
  register: UseFormRegister<LoginFormData>;
  handleSubmit: UseFormHandleSubmit<LoginFormData>;
  onSubmit: (data: LoginFormData) => void;
  isPending: boolean;
}

export function LoginForm({
  register,
  handleSubmit,
  onSubmit,
  isPending,
}: LoginFormProps) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center items-center gap-8">
        <FormField
          label="نام کاربری"
          name="username"
          type="text"
          placeholder="نام کاربری خود را وارد کنید"
          register={register}
        />
        <FormField
          label="کلمه عبور"
          name="password"
          type="password"
          placeholder="رمز خود را وارد کنید"
          register={register}
        />
        <div className=" flex flex-col w-full max-w-[450px] font-bold gap-2">
          <Button type="submit" disabled={isPending} className="cursor-pointer">
            {isPending ? "در حال ورود..." : "ورود"}
          </Button>
        </div>
      </div>
    </form>
  );
}
