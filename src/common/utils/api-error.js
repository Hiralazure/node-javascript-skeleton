export class ApiError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
  static badRequest(message = "bad request") {
    return new ApiError(400, message);
  }
  static unAuthorised(message = "unAuthorised") {
    return new ApiError(401, message);
  }
}
