const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt,
  passport = require("passport");

var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(opts, async function (jwt_payload: any, done: any) {
    try {
      //   let user = await Users.getProfile(jwt_payload._id);

      //   if (user) return done(null, user);
      return done(null, false);
    } catch (e) {
      return done(e, false);
    }
  })
);
