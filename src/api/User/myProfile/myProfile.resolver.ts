import { prisma } from "../../../../prisma/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
  Query: {
    myProfile: async (_, __, { req }) => {
      const { user } = req;
      isAuthenticated(req);
      return prisma.user({ id: user.id });
    }
  }
};
