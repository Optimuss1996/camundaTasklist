import { Input } from "@/components/ui/input";
import type { UseFormRegister } from "react-hook-form";

interface LoginFormData {
  username: string;
  password: string;
}

interface FormFieldProps {
  label: string;
  name: keyof LoginFormData;
  type: string;
  placeholder: string;
  register: UseFormRegister<LoginFormData>;
  error?: string;
}

export function FormField({
  label,
  name,
  type,
  placeholder,
  register,
  error,
}: FormFieldProps) {
  return (
    <div className="w-full max-w-[450px] flex flex-col gap-2">
      <p className="text-custom-neutral01 font-bold">{label}</p>
      <Input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full h-12 placeholder:text-custom-neutral02 placeholder:text-sm border-2 ${
          error ? "border-red-500" : "border-custom-neutral03"
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
