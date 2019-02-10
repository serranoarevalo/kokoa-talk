import { isAuthenticated } from "../../../middlewares";
import { UpdateStatusMutationArgs } from "../../../types/graph";
import { prisma, User } from "../../../../prisma/prisma-client";

export default {
  Mutation: {
    updateStatus: async (
      _,
      args: UpdateStatusMutationArgs,
      { request }
    ): Promise<User> => {
      const { user } = request;
      const { status } = args;
      isAuthenticated(request);
      const updatedUser = await prisma.updateUser({
        data: { status },
        where: { id: user.id }
      });
      return updatedUser;
    }
  }
};
