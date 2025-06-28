import { useMutation } from "@tanstack/react-query";
import { camundaService } from "@/services/camundaService";

interface LoginInput {
  username: string;
  password: string;
}

export const useLogin = () => {
  return useMutation({
    mutationFn: ({ username, password }: LoginInput) =>
      camundaService.login(username, password),
  });
};
