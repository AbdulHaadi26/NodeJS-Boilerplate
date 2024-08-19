import bcrypt from "bcrypt";

const bcryptHash = (str: string): Promise<string> => {
  return bcrypt.hash(str, Number(process.env.HASH_KEY));
};

const bcryptCompare = (str: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(str, hash);
};

export { bcryptHash, bcryptCompare };
