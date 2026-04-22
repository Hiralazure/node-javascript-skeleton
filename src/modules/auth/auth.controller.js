import { ApiResponse } from "../../common/utils/api-response";
import * as authSerivce from "./auth.service.js";
export const register = async (req, res) => {
  const user = authSerivce.register(req.body);
  ApiResponse.created(res, "Registration Success", user);
};
