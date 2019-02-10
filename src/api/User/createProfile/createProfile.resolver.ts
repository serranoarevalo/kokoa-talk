import { prisma, User } from "../../../../prisma/prisma-client";
import { CreateProfileMutationArgs } from "../../../types/graph";
import { secretGenerator } from "../../../utils";

export default {
  Mutation: {
    createProfile: async (
      _,
      args: CreateProfileMutationArgs
    ): Promise<User> => {
      const { email } = args;
      const user = await prisma.createUser({
        email
      });
      return user;
    }
  }
};
