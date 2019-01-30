require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import { importSchema } from "graphql-import";
import "./passport";
import { resolvers } from "./resolvers";
import { prisma } from "../prisma/prisma-client";
import passport = require("passport");

const server = new GraphQLServer({
  typeDefs: importSchema("./src/schema.graphql"),
  resolvers,
  context: ({ req }: { req: any }) => ({ prisma, user: req.user })
} as any);

server.express.use("/graphql", (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);
});

server.express.use(logger("tiny"));

server.start(() => console.log("Server is running on http://localhost:4000"));
