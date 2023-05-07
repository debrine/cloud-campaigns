export const getTextColourForPositiveNegativeNumber = (
  number: number
): string => {
  return number < 0 ? 'negative' : number === 0 ? 'text.primary' : 'positive';
};
