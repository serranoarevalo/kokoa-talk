import { secretGenerator } from "../../../utils";
import { prisma } from "../../../../prisma/prisma-client";

export default {
  Mutation: {
    requestSecret: async (_, { email }): Promise<Boolean> => {
      try {
        const loginSecret = secretGenerator();
        await prisma.updateUser({ data: { loginSecret }, where: { email } });
        return true;
      } catch {
        return false;
      }
    }
  }
};
