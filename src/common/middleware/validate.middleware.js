import { ApiError } from "../utils/api-error";

export const validate = (Dtoclass) => {
  return (req, res, next) => {
    const { errors, values } = Dtoclass.validate(req.body);
    if (errors) {
      throw ApiError.badRequest(errors.join(";"));
    }
    req.body = value;
    next();
  };
};
