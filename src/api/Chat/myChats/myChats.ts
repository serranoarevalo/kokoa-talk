import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../prisma/prisma-client";
import { CHAT_MESSAGE } from "../../../relationFragments";

export default {
  Query: {
    myChats: async (_, __, { request }): Promise<any> => {
      isAuthenticated(request);
      const { user } = request;
      const chats = await prisma
        .user({ id: user.id })
        .chats()
        .$fragment(CHAT_MESSAGE);
      return chats;
    }
  }
};
