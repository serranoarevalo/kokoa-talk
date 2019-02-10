import { User, prisma } from "../../../../prisma/prisma-client";
import { isAuthenticated } from "../../../middlewares";
import { ProfileQueryArgs } from "../../../types/graph";

export default {
  Query: {
    profile: async (_, args: ProfileQueryArgs): Promise<User> => {
      const { id } = args;
      const user = await prisma.user({ id });
      return user;
    }
  }
};
