export const typeDefs = ["type Mutation {\n  createChat(users: [String!]!): Chat!\n  sendMessage(text: String!, chatId: String!): Message!\n  confirmSecret(email: String!, secret: String!): String!\n  createProfile(email: String!): User!\n  requestSecret(email: String!): Boolean!\n  updateStatus(status: String!): User!\n}\n\ntype Query {\n  myChats: [Chat!]!\n  seeChat(id: String!): Chat!\n  myProfile: User!\n  search(email: String!): [User!]!\n  profile(id: String!): User!\n}\n\ntype User {\n  id: ID!\n  email: String!\n  status: String!\n  loginSecret: String!\n}\n\ntype Chat {\n  id: ID!\n  users: [User!]!\n  messages: [Message!]!\n}\n\ntype Message {\n  id: ID!\n  text: String!\n  user: User!\n  read: Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  myChats: Array<Chat>;
  seeChat: Chat;
  myProfile: User;
  search: Array<User>;
  profile: User;
}

export interface SeeChatQueryArgs {
  id: string;
}

export interface SearchQueryArgs {
  email: string;
}

export interface ProfileQueryArgs {
  id: string;
}

export interface Chat {
  id: string;
  users: Array<User>;
  messages: Array<Message>;
}

export interface User {
  id: string;
  email: string;
  status: string;
  loginSecret: string;
}

export interface Message {
  id: string;
  text: string;
  user: User;
  read: boolean;
}

export interface Mutation {
  createChat: Chat;
  sendMessage: Message;
  confirmSecret: string;
  createProfile: User;
  requestSecret: boolean;
  updateStatus: User;
}

export interface CreateChatMutationArgs {
  users: Array<string>;
}

export interface SendMessageMutationArgs {
  text: string;
  chatId: string;
}

export interface ConfirmSecretMutationArgs {
  email: string;
  secret: string;
}

export interface CreateProfileMutationArgs {
  email: string;
}

export interface RequestSecretMutationArgs {
  email: string;
}

export interface UpdateStatusMutationArgs {
  status: string;
}
