import axios from "axios";
import type { TypedAxiosError } from "@/types/axiosTypes";

const baseURL = "/api";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // for session-based authentication
  timeout: 10000, // 10 seconds timeout to prevent long requests
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.debug(
      `[Axios Request] ${config.method?.toUpperCase()} ${config.url}`
    );
    return config;
  },
  (error) => {
    console.error("[Axios Request Error]", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const typedError: TypedAxiosError = {
      ...error,
      isAxiosError: true,
      isUnauthorized: false,
      isForbidden: false,
      isNotFound: false,
      isServerError: false,
      isNoResponse: false,
      isNetworkError: false,
      isUnhandled: false,
    };

    if (typedError.response) {
      const status = typedError.response.status;

      switch (status) {
        case 401:
          typedError.isUnauthorized = true;
          // navigate to login page if session is expired
          window.location.href = "/login";
          break;
        case 403:
          typedError.isForbidden = true;
          break;
        case 404:
          typedError.isNotFound = true;
          break;
        case 500:
        case 502:
        case 503:
        case 504:
          typedError.isServerError = true;
          break;
        default:
          typedError.isUnhandled = true;
      }
    } else if (typedError.request) {
      typedError.isNoResponse = true;
    } else {
      typedError.isNetworkError = true;
    }

    console.error("[Axios Response Error]", typedError);
    return Promise.reject(typedError);
  }
);

export default axiosInstance;
