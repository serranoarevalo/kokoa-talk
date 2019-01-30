import passport from "passport";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import { prisma } from "../prisma/prisma-client";
import { NextFunction, Request, Response } from "express";

const options: StrategyOptions = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

const strategy = new Strategy(options, async (payload, done) => {
  const user = await prisma.user({ id: payload.id });
  return done(null, user);
});

export const authenticateJwt = (
  req: Request,
  res: Response,
  next: NextFunction
) =>
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);

passport.use(strategy);
passport.initialize();
