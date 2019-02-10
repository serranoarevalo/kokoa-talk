import { secretGenerator } from "../../../utils";
import { prisma } from "../../../../prisma/prisma-client";
import { sendLoginEmail } from "../../../mailer";

export default {
  Mutation: {
    requestSecret: async (_, { email }): Promise<Boolean> => {
      try {
        const loginSecret = secretGenerator();
        await prisma.updateUser({ data: { loginSecret }, where: { email } });
        await sendLoginEmail(loginSecret, email);
        return true;
      } catch {
        return false;
      }
    }
  }
};
