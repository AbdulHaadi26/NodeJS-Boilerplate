enum ResponseCodes {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  INTERNAL_SERVER_ERROR = 500,
}

enum ResponseCodeTexts {
  SUCCESS = "Success",
  BAD_REQUEST = "Bad Request",
  UNAUTHORIZED = "Unauthorized",
  INTERNAL_SERVER_ERROR = "Internal Server Error",
}

export { ResponseCodes, ResponseCodeTexts };
