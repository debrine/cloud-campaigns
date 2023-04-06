/**
 *
 * @param abilityScore - The ability score value
 * @returns - The modifier value
 */
export const calculateModifierFromAbilityScore = (
  abilityScore: number
): number => {
  return Math.floor((abilityScore - 10) / 2);
};
