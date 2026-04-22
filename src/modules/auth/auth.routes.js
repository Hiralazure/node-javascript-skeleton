import Router from "express";
import { register } from "./auth.controller";
import { validate } from "../../common/middleware/validate.middleware";
import { registerDto } from "./dto/register.dto";

export const userRouter = Router();
userRouter.post("/register", validate(registerDto), register);
