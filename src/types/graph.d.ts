export const typeDefs = ["type User {\n  id: ID!\n  email: String!\n  status: String!\n  friends: [User!]!\n  chats: [Chat!]!\n  messages: [Message!]!\n}\n\ntype Chat {\n  id: ID!\n  users: [User!]!\n  messages: [Message!]!\n}\n\ntype Message {\n  id: ID!\n  text: String!\n  user: User!\n  read: Boolean!\n}\n\ntype Mutation {\n  createProfile(email: String!): User!\n}\n\ntype Query {\n  myProfile: User!\n}\n"];
/* tslint:disable */

export interface Query {
  myProfile: User;
}

export interface User {
  id: string;
  email: string;
  status: string;
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
}

export interface CreateProfileMutationArgs {
  email: string;
}
