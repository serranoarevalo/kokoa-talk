import { prisma, User } from "../../../../prisma/prisma-client";
import { CreateProfileMutationArgs } from "../../../types/graph";

export default {
  Mutation: {
    createProfile: async (
      _,
      args: CreateProfileMutationArgs
    ): Promise<User> => {
      const { email } = args;
      const user = await prisma.createUser({ email });
      return user;
    }
  }
};
