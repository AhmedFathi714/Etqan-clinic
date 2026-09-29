const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require("../src/app/user/router");
const app = express();
const errorHandler = require("../src/common/error/errorHandling");

app.use(express.json());
const port = 3002;

app.use("/users", userRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
