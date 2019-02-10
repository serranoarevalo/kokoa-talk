export const typeDefs = ["type User {\n  id: ID!\n  email: String!\n  status: String!\n  loginSecret: String!\n  friends: [User!]!\n  chats: [Chat!]!\n  messages: [Message!]!\n}\n\ntype Chat {\n  id: ID!\n  users: [User!]!\n  messages: [Message!]!\n}\n\ntype Message {\n  id: ID!\n  text: String!\n  user: User!\n  read: Boolean!\n}\n\ntype Query {\n  confirmSecret(email: String!, secret: String!): String!\n  myProfile: User!\n}\n\ntype Mutation {\n  createProfile(email: String!): User!\n  requestSecret(email: String!): Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  confirmSecret: string;
  myProfile: User;
}

export interface ConfirmSecretQueryArgs {
  email: string;
  secret: string;
}

export interface User {
  id: string;
  email: string;
  status: string;
  loginSecret: string;
  friends: Array<User>;
  chats: Array<Chat>;
  messages: Array<Message>;
}

export interface Chat {
  id: string;
  users: Array<User>;
  messages: Array<Message>;
}

export interface Message {
  id: string;
  text: string;
  user: User;
  read: boolean;
}

export interface Mutation {
  createProfile: User;
  requestSecret: boolean;
}

export interface CreateProfileMutationArgs {
  email: string;
}

export interface RequestSecretMutationArgs {
  email: string;
}
