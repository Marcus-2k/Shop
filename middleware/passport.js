import { ExtractJwt, Strategy } from "passport-jwt";
import UserModel from "../models/User.js";

export default (passport) => {
  passport.use(
    new Strategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.ACCESS_SECRET_JWT,
      },
      async (payload, done) => {
        try {
          const user = await UserModel.findById(
            { _id: payload.id },
            { email: 1 }
          );
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        } catch (e) {
          console.log(e);
        }
      }
    )
  );
};
