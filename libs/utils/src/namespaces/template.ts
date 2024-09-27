export const templatesList = [
  "infiniot",
] as const;

export type Template = (typeof templatesList)[number];
