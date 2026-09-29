const logger = require("../../common/logger/logger");

module.exports = (err, req, res, next) => {
  const operational = err.isOperational;
  const statusCode = err.statusCode || 500;
  logger.error({
    statusCode,
    code: err.code,
    operational,
    message: err.message,
    stack: err.stack,
  });
  if (operational) {
    return res.status(statusCode).json({ error: err.message });
  }
  return res.status(500).json({ message: "Something Went Wrong" });
};
