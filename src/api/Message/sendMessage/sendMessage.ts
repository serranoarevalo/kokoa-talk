import { isAuthenticated } from "../../../middlewares";
import { SendMessageMutationArgs } from "../../../types/graph";
import { Message, prisma } from "../../../../prisma/prisma-client";

export default {
  Mutation: {
    sendMessage: async (
      _,
      args: SendMessageMutationArgs,
      { request }
    ): Promise<Message | null> => {
      isAuthenticated(request);
      try {
        const { text, chatId } = args;
        const {
          user: { id }
        } = request;
        const chatUsers = await prisma.chat({ id: chatId }).users();
        const canPost = chatUsers.map(user => user.id).includes(id);
        if (canPost) {
          const message = await prisma.createMessage({
            text,
            user: { connect: { id } },
            chat: { connect: { id: chatId } }
          });
          return message;
        }
        return null;
      } catch {
        return null;
      }
    }
  }
};
