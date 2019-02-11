import { isAuthenticated } from "../../../middlewares";
import { SeeChatQueryArgs } from "../../../types/graph";
import { Message, prisma } from "../../../../prisma/prisma-client";

export default {
  Query: {
    seeChat: async (
      _,
      args: SeeChatQueryArgs,
      { request }
    ): Promise<Message[]> => {
      isAuthenticated(request);
      const { id } = args;
      const chat = await prisma
        .chat({
          id
        })
        .messages();
      return chat;
    }
  }
};
