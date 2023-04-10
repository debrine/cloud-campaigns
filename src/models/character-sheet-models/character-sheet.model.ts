import { z } from 'zod';
import { AbilityScoreModifiers, AbilityScores } from './ability-scores.model';

export const CharacterSheet = z.object({
  characterName: z.string(),
  playerName: z.string(),
  characterClass: z.string(), // change to enum
  characterLevel: z.number().min(0).max(20),
  abilityScores: AbilityScores,
  abilityScoreModifiers: AbilityScoreModifiers,
  proficiencyBonus: z.number().min(0).max(10),
  alignment: z.string(), // change to enum
  background: z.string(),
  race: z.string(), // change to enum
  experiencePoints: z.number().min(0),
});

export type CharacterSheet = z.infer<typeof CharacterSheet>;
