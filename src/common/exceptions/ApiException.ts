import httpStatus from 'http-status';
import BaseException from './BaseException';

export default class APIException extends BaseException {
  constructor(message: string, status: number = httpStatus.INTERNAL_SERVER_ERROR) {
    super(message, status);
  }
}
