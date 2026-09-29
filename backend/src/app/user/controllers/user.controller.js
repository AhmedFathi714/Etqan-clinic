const userService = require("../services/user.service");

exports.register = async (req, res, next) => {
  try {
    const result = await userService.register(
      req.body.email,
      req.body.password,
      req.body.first_name,
      req.body.last_name,
      req.body.phone_number,
    );
    res.status(201).json({
      email: result.user.email,
      first_name: result.user.first_name,
      last_name: result.user.last_name,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await userService.login(req.body.email, req.body.password);
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

exports.me = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const user = await userService.me(token);
    return res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

exports.refresh = async (req, res, next) => {
  try {
    const token = req.body.token;
    const createNewAccessToken = await userService.refresh(token);
    return res.status(200).json({ createNewAccessToken });
  } catch (error) {
    next(error);
  }
};
