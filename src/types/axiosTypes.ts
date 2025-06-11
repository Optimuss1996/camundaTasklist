import { AxiosError } from "axios";
// Extend AxiosError to add custom properties for better error handling
export interface TypedAxiosError<T = unknown> extends AxiosError<T> {
  isAxiosError: true; // to ensure the error is an AxiosError
  isUnauthorized: boolean;
  isForbidden: boolean;
  isNotFound: boolean;
  isServerError: boolean;
  isNoResponse: boolean;
  isNetworkError: boolean;
  isUnhandled: boolean;
}
