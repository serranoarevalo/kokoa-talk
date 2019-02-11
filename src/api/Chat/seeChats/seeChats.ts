import { isAuthenticated } from "../../../middlewares";
import { Chat, prisma } from "../../../../prisma/prisma-client";

export default {
  Query: {
    seeChats: async (_, __, { request }): Promise<any> => {
      isAuthenticated(request);
      const chats = await prisma.chats({
        where: { users_some: { id: request.user.id } }
      }).$fragment(`
      fragment UserPosts on User {
        posts { id title content published }
      }
    `);
      return chats;
    }
  }
};
