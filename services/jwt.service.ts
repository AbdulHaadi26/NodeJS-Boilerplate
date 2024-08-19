import jsonwebtoken from "jsonwebtoken";

export const jwtSign = (payload: any) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("Missing environment variables");
  }

  return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const jwtVerify = (token: string) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("Missing environment variables");
  }

  return jsonwebtoken.verify(token, process.env.JWT_SECRET);
};

export const jwtDecode = (token: string) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("Missing environment variables");
  }

  return jsonwebtoken.decode(token);
};
