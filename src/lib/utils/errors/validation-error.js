import HTTP_STATUS_CODES from "../../../const/http-status-codes.js";
import CustomError from "./custom-error.js";

class ValidationError extends CustomError {
  constructor(
    name,
    statusCode = HTTP_STATUS_CODES.BAD_REQUEST,
    description = "Wrong Input",
    isOperational = true
  ) {
    super(name, statusCode, isOperational, description);
  }
}

export default ValidationError;
