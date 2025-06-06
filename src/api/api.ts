import axios from "axios";

export const camunda = (username: string, password: string) =>
  axios.create({
    baseURL: "http://localhost:8080/engine-rest",
    auth: {
      username,
      password,
    },
  });
