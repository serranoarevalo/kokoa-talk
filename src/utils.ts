import { adjectives, nouns } from "./words";

const random = Math.floor(Math.random() * nouns.length);

export const secretGenerator = (): string =>
  `${adjectives[random]} ${nouns[random]}`;
