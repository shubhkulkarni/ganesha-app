export const getTotal = (arr) => {
  if (arr.length) return arr.map((i) => i.amount).reduce((a, b) => a + b);
  return 0;
};
