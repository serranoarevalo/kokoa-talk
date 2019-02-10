require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import { authenticateJwt } from "./passport";
import schema from "./schema";
import "./passport";

const server = new GraphQLServer({
  schema,
  context: (req: any) => ({ req })
});

server.express.use("/graphql", authenticateJwt);

server.express.use(logger("tiny"));

server.start(() => console.log("Server is running on http://localhost:4000"));
