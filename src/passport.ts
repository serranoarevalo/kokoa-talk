import passport from "passport";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import { prisma } from "../prisma/prisma-client";

const options: StrategyOptions = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

const strategy = new Strategy(options, async (payload, done) => {
  const user = await prisma.user({ id: payload.id });
  return done(null, user);
});

passport.use(strategy);
passport.initialize();
