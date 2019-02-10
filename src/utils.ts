import { adjectives, nouns } from "./words";

const random = Math.floor(Math.random() * adjectives.length);

export const secretGenerator = (): string =>
  `${adjectives[random]} ${nouns[random]}`;
