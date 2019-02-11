import { isAuthenticated } from "../../../middlewares";
import { SeeChatQueryArgs } from "../../../types/graph";
import { prisma } from "../../../../prisma/prisma-client";
import { CHAT_MESSAGE } from "../../../relationFragments";

export default {
  Query: {
    seeChat: async (_, args: SeeChatQueryArgs, { request }): Promise<any> => {
      isAuthenticated(request);
      const { id } = args;
      const chat = await prisma
        .chat({
          id
        })
        .$fragment(CHAT_MESSAGE);
      return chat;
    }
  }
};
