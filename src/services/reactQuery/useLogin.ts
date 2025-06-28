import { useMutation } from "@tanstack/react-query";
import { camundaService } from "@/services/camundaService";

export const useLogin = () => {
  return useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => camundaService.login(username, password),
  });
};
