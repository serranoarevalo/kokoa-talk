import { prisma, User } from "../../../../prisma/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
  Query: {
    myProfile: async (_, __, { req }): Promise<User> => {
      isAuthenticated(req);
      const user = await prisma.user({ id: req.user.id });
      return user;
    }
  }
};
