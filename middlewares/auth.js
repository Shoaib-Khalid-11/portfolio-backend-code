import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchASyncErrors.js";
import ErrorHandler from "./error.js";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  // const { token } = req.cookies;
  // const token = req.headers.authorization.split(" ")[1];
  // const token = req.headers.authorization;
  const token = req.headers["authorization"];
  if (!token) {
    return next(new ErrorHandler("User Not Authenticated!", 400));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
  next();
});
