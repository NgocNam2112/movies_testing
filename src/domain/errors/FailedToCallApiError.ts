import { Errors } from "./ApiError";
import BaseError from "./BaseError";

export interface IFailedToCallApiError {
  message: string;
  statusCode: number;
  errors: Errors;
  reason: string;
}

class FailedToCallApiError extends BaseError {
  constructor(
    message: string,
    public statusCode?: number,
    public isError?: boolean,
    public reason?: string
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isError = isError;
    this.reason = reason;
  }
}

export default FailedToCallApiError;
