export const rand = (): string => {
  return Math.random().toString(36).substr(2); // remove `0.`
};

export const createToken = (): string => {
  return rand() + rand(); // to make it longer
};
