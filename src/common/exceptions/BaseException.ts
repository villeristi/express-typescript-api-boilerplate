export default class BaseException extends Error {
  public status?: number;

  constructor(message: string, status: number) {
    super(message);
    this.message = message;
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}
