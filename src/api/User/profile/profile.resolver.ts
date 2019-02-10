import { User, prisma } from "../../../../prisma/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
  Query: {
    profile: async (_, args, { request }): Promise<User> => {
      isAuthenticated(request);
      const { id } = args;
      const user = await prisma.user({ id });
      return user;
    }
  }
};
