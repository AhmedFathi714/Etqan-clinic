class AppError extends Error {
  constructor(message, statusCode, code, isOperational = true) {
    super(message);

    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = isOperational;
  }
}

module.exports = AppError;
