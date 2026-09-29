const AppError = require("../../common/error/appError");

module.exports = {
  userAlreadyExistsError: new AppError(
    "the user already exists",
    409,
    "USER_ALREADY_EXISTS",
  ),
  InvalidCredentials: new AppError(
    "Invalid Credentials",
    401,
    "INVALID_CREDENTIALS",
  ),
  Unauthorized: new AppError("Unauthorized", 401, "UNAUTHORIZED"),
  Forbidden: new AppError("Forbidden", 403, "FORBIDDEN"),
  accountDeactivatedError: new AppError("Deactivated", 403, "DEATIVATED"),
};
