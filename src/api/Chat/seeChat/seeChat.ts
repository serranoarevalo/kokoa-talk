import { isAuthenticated } from "../../../middlewares";
import { SeeChatQueryArgs } from "../../../types/graph";
import { prisma, Chat } from "../../../../prisma/prisma-client";

export default {
  Query: {
    seeChat: async (_, args: SeeChatQueryArgs, { request }): Promise<any> => {
      isAuthenticated(request);
      const { id } = args;
      const chat = await prisma.chat({
        id
      }).$fragment(`
        fragment ChatMessages on Chat {
            id
           messages{
            text
            user {
                id
                email
            }
            read
           }
        }
      `);
      return chat;
    }
  }
};
