import HTTP_STATUS_CODES from "../../../const/http-status-codes.js";
import CustomError from "./base-error.js";

class Api404Error extends CustomError {
  constructor(
    name,
    statusCode = HTTP_STATUS_CODES.NOT_FOUND,
    description = "Not found.",
    isOperational = true
  ) {
    super(name, statusCode, isOperational, description);
  }
}

export default Api404Error;
