import { CreateChatMutationArgs } from "../../../types/graph";
import { isAuthenticated } from "../../../middlewares";
import { prisma, Chat } from "../../../../prisma/prisma-client";

export default {
  Mutation: {
    createChat: async (
      _,
      args: CreateChatMutationArgs,
      { request }
    ): Promise<Chat> => {
      isAuthenticated(request);
      const { users } = args;
      const chat = await prisma.createChat({
        users: {
          connect: users.map(user => ({ email: user }))
        }
      });
      return chat;
    }
  }
};
