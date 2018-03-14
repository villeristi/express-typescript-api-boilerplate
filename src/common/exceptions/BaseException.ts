export default class BaseException extends Error {
  constructor(message, status, isPublic) {
    super(message);
    this.message = message;
    this.status = status;
    this.isPublic = isPublic;
    Error.captureStackTrace(this, this.constructor);
  }
}
