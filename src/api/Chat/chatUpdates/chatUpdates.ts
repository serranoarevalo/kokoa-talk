import { SubscribeToChatSubscriptionArgs } from "../../../types/graph";
import { prisma } from "../../../../prisma/prisma-client";
import { MESSAGE_USER } from "../../../relationFragments";

export default {
  Subscription: {
    chatUpdates: {
      subscribe: async (_, args: SubscribeToChatSubscriptionArgs) =>
        await prisma.$subscribe
          .message({
            AND: [
              { mutation_in: ["CREATED"] },
              { node: { chat: { id: args.chatId } } }
            ]
          })
          .node()
          .$fragment(MESSAGE_USER),
      resolve: payload => payload
    }
  }
};
