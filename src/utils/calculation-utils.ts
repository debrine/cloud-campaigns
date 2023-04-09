import { EXPERIENCE_POINTS_PER_LEVEL } from '../constants/experience-points';

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

export const getExperienceNeededForLevelUp = (currentLevel: number): number => {
  const experiencePointsCurrentLevel = EXPERIENCE_POINTS_PER_LEVEL.find(
    (levelData) => levelData.level === currentLevel
  )?.experiencePoints;

  const experiencePointsNextLevel = EXPERIENCE_POINTS_PER_LEVEL.find(
    (levelData) => levelData.level === currentLevel + 1
  )?.experiencePoints;

  if (
    experiencePointsCurrentLevel == null ||
    experiencePointsNextLevel == null
  ) {
    console.error('Unable to calculate experience needed for level');
    console.error('Invalid level provided', currentLevel);

    throw new Error();
  }

  return experiencePointsNextLevel - experiencePointsCurrentLevel;
};

export const calculateExperienceNeededForNextLevel = (
  currentLevel: number,
  experiencePoints: number
): {
  remainingExperienceForNextLevel: number;
  currentLevelProgressPercentage: number;
} => {
  const experienceNeededForNextLevel =
    getExperienceNeededForLevelUp(currentLevel);

  const currentLevelProgressPercentage =
    (experiencePoints / experienceNeededForNextLevel) * 100;

  const remainingExperienceForNextLevel =
    experienceNeededForNextLevel - experiencePoints;

  return {
    remainingExperienceForNextLevel,
    currentLevelProgressPercentage,
  };
};
