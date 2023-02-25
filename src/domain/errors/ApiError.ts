import { AxiosResponse } from "axios";

export interface Errors {
  code: string;
  msg: string;
}

export interface ApiError<T = any> extends Error {
  request?: any;
  response?: AxiosResponse<T>;
  statusCode: number;
  reason: string;
  errors: Errors[];
}
