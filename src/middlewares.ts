export const isAuthenticated = (req: any) => {
  if (!req.user) {
    throw new Error("No JWT token provided. I refuse to proceed");
  }
};
