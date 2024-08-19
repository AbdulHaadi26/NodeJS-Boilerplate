import { JWTPayloadType } from "../types";

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt,
  passport = require("passport");

var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(opts, async function (
    jwt_payload: JWTPayloadType,
    done: any
  ) {
    if (jwt_payload?.id) return done(null, jwt_payload);
    return done(null, false);
  })
);

export { passport };
