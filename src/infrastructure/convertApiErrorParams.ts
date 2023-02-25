import { ApiError } from "../domain/errors/ApiError";

export const convertApiErrorParams = (
  error: ApiError
): [string, number | undefined, boolean, string] => {
  // エラーのレスポンスボディが未定義のケース
  if (!error) {
    return ["", undefined, true, ""];
  }
  const msg =
    error.errors && error.errors.length
      ? (error.statusCode === 400 && error.reason === "custom_error") ||
        (error.statusCode === 400 && error.reason === "rk_login_error") ||
        error.statusCode === 503
        ? error.errors[0].msg
          ? error.errors[0].msg
          : ""
        : ""
      : "";
  const status = error.statusCode ? error.statusCode : error.response?.status;
  const isError = !(
    error.reason === "custom_error" && error.statusCode === 400
  );
  return [msg, status, isError, error.reason];
};
