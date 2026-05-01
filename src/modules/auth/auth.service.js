import { ApiError } from "../../common/utils/api-error.js";
import {
  generateAccessToken,
  generateRefreshToken,
  generateToken,
} from "../../common/utils/jwt.utils.js";
import User from "./auth.model.js";
const hashedToken = (token) => {
  return (hashedToken = crypto
    .createHash("sha256")
    .update(rawToken)
    .digest("hex"));
};
export const register = async ({ name, email, password, role }) => {
  const existing = await User.findOne({ email });
  if (existing) throw ApiError.conflict("Email already exists");
  const { rawToken, hashedToken } = generateToken();
  const userObj = await User.create({
    name,
    email,
    password,
    role,
    verificationToken: hashedToken,
  });
  return userObj;
};
export const login = async (email, password) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) throw ApiError.unAuthorised("Invalid email and password");
  //check password
  if (!user.isVerified) {
    throw ApiError.forbidden("Pls verify email");
  }
  const accessToken = generateAccessToken({ id: user._id, role: user.role });
  const refreshToken = generateRefreshToken({ id: user._id, role: user.role });
  user.refreshtoken = hashedToken(refreshToken);
  await user.save({ validateBeforeSave: false });
  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.refreshtoken;
  return {
    user: userObj,
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};
export const refresh= async(token){
    if(!token)throw ApiError.unAuthorised("authorised")
        
}