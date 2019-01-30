import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import { importSchema } from "graphql-import";
import { resolvers } from "./resolvers";
import { prisma } from "../prisma/prisma-client";

const server = new GraphQLServer({
  typeDefs: importSchema("./src/schema.graphql"),
  resolvers,
  context: { prisma }
} as any);

server.express.use(logger("tiny"));

server.start(() => console.log("Server is running on http://localhost:4000"));
