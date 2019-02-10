import { Chat, prisma } from "../../../../prisma/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
  Query: {
    myChats: async (_, __, { request }): Promise<Chat[]> => {
      isAuthenticated(request);
      const { user } = request;
      const chats = await prisma.chats({
        where: { users_some: { id: user.id } }
      });
      return chats;
    }
  }
};
