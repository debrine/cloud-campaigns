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

export const calculateProficiencyBonus = (level: number): number => {
  if (level < 0) {
    throw new Error('Level must be at least 0.');
  }

  // Proficiency bonus increases every 4 levels: levels 1-4, 5-8, 9-12, etc.
  const proficiencyBonus = 2 + Math.floor((level - 1) / 4);

  return proficiencyBonus >= 2 ? proficiencyBonus : 2;
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
