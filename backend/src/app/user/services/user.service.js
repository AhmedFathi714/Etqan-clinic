const userRepo = require("../repository/user.repository");
const { passwordHash, comparePassword } = require("../utils/hash");
const {
  userAlreadyExistsError,
  InvalidCredentials,
  accountDeactivatedError,
  Unauthorized,
  Forbidden,
} = require("../errors");
const logger = require("../../../common/logger/logger");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} = require("../utils/jwt");

exports.register = async (
  email,
  password,
  first_name,
  last_name,
  phone_number,
) => {
  logger.info("Register Now");
  const exist = await userRepo.findByEmail(email);
  if (exist) throw userAlreadyExistsError;
  logger.info("User Doesn't Exist");
  const password_hashed = await passwordHash(password);
  const user = await userRepo.create(
    email,
    password_hashed,
    first_name,
    last_name,
    phone_number,
  );
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  return {
    user,
    accessToken,
    refreshToken,
  };
};

exports.login = async (email, password) => {
  const user = await userRepo.findByEmail(email);
  if (!user) throw InvalidCredentials;

  const isCorrectPassword = await comparePassword(
    password,
    user.password_hashed,
  );
  if (!isCorrectPassword) throw InvalidCredentials;
  if (!user.is_active) throw accountDeactivatedError;
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  return {
    accessToken,
    refreshToken,
  };
};

exports.me = async (token) => {
  if (!token) throw Unauthorized;
  const user = verifyAccessToken(token);
  return user;
};

exports.refresh = async (token) => {
  if (!token) throw Unauthorized;
  const user = verifyRefreshToken(token);
  const createNewAccessToken = generateAccessToken(user);
  return createNewAccessToken;
};
