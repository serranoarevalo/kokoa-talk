import { ConfirmSecretMutationArgs } from "../../../types/graph";
import { prisma } from "../../../../prisma/prisma-client";
import { signJwt } from "../../../passport";

export default {
  Mutation: {
    confirmSecret: async (
      _,
      args: ConfirmSecretMutationArgs
    ): Promise<String> => {
      const { email, secret } = args;
      const user = await prisma.user({ loginSecret: secret, email });
      if (user) {
        const token = signJwt(user.id);
        return token;
      } else {
        throw Error("Secret not confirmed");
      }
    }
  }
};
