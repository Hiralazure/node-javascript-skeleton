import Joi from "joi";
export class BaseDto {
  static schema = Joi.Object({});
  static validate(data) {
    const { error, value } = this.schema.validate(data, {
      abortEarly: false, // it will collect all errors
      stripUnKnown: true,
    });
    if (error) {
      const errors = error.details.map((d) => d.message);
      return { erros, value: null };
    }
    return { errors: null, value };
  }
}
