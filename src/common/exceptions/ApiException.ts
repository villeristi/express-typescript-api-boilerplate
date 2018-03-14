import httpStatus from 'http-status';
import BaseException from './BaseException';

export default class APIException extends BaseException {
  constructor(message, status = httpStatus.INTERNAL_SERVER_ERROR, isPublic = false) {
    super(message, status, isPublic);
  }
}
