import { SearchQueryArgs } from "../../../types/graph";
import { User, prisma } from "../../../../prisma/prisma-client";

export default {
  Query: {
    search: async (_, args: SearchQueryArgs): Promise<User[]> => {
      const { email } = args;
      const users = await prisma.users({
        where: {
          email_contains: email
        }
      });
      return users;
    }
  }
};
