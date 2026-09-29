const bcrypt = require("bcrypt");

exports.passwordHash = (password) => {
  return bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUNDS));
};

exports.comparePassword = (password, passwordHash) => {
  return bcrypt.compare(password, passwordHash);
};
