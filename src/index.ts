require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import { importSchema } from "graphql-import";
import "./passport";
import { resolvers } from "./resolvers";
import { authenticateJwt } from "./passport";
import { prisma } from "../prisma/prisma-client";

const server = new GraphQLServer({
  typeDefs: importSchema("./src/schema.graphql"),
  resolvers,
  context: ({ req }: { req: any }) => ({ prisma, user: req.user })
} as any);

server.express.use("/graphql", authenticateJwt);

server.express.use(logger("tiny"));

server.start(() => console.log("Server is running on http://localhost:4000"));
