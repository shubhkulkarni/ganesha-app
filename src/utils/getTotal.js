export const getTotal = (arr) =>
  arr.map((i) => i.amount).reduce((a, b) => a + b);
