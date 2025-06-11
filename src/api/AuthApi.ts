import axios from "./axiosInstance";

export const login = async (username: string, password: string) => {
  const response = await axios.post("/identity/verify", {
    username,
    password,
  });
  console.log("response", response.data);
  return response.data;
};
