import { ChatUpdatesSubscriptionArgs } from "../../../types/graph";
import { prisma } from "../../../../prisma/prisma-client";
import { MESSAGE_USER } from "../../../relationFragments";

export default {
  Subscription: {
    chatUpdates: {
      subscribe: async (_, args: ChatUpdatesSubscriptionArgs) =>
        await prisma.$subscribe
          .message({
            AND: [
              { mutation_in: ["CREATED"] },
              { node: { chat: { id: args.id } } }
            ]
          })
          .node()
          .$fragment(MESSAGE_USER),
      resolve: payload => payload
    }
  }
};
