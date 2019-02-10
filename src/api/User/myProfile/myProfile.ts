import { prisma, User } from "../../../../prisma/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
  Query: {
    myProfile: async (_, __, { request }): Promise<User> => {
      isAuthenticated(request);
      const user = await prisma.user({ id: request.user.id });
      return user;
    }
  }
};
