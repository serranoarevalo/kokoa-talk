import { ReadMessageMutationArgs } from "../../../types/graph";
import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../prisma/prisma-client";

export default {
  Mutation: {
    readMessage: async (
      _,
      args: ReadMessageMutationArgs,
      { request }
    ): Promise<Boolean> => {
      isAuthenticated(request);
      try {
        await prisma.updateMessage({
          data: { read: true },
          where: { id: args.id }
        });
        return true;
      } catch {
        return false;
      }
    }
  }
};
