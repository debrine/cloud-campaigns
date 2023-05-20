import { z } from 'zod';
import {
  AbilityScores,
  SavingThrowProficiencies,
  Skills,
} from './ability-scores.model';
import { CharacterSummaryModel } from './character-summary.model';
import {
  CharacterClass,
  CharacterRace,
} from '../../enums/character-sheet-enums';

export const CharacterSheet = z.object({
  characterName: z.string(),
  playerName: z.string(),
  characterClass: z.nativeEnum(CharacterClass),
  characterLevel: z.number().min(0).max(20).default(1),
  abilityScores: AbilityScores,
  proficiencyBonus: z.number().min(0).max(10).default(2),
  alignment: z.string(),
  background: z.string(),
  race: z.nativeEnum(CharacterRace),
  experiencePoints: z.number().min(0).default(0),
  inspiration: z.boolean().default(false),
  skills: Skills,
  armourClass: z.number().min(0).default(10),
  initiative: z.number().min(0).default(0),
  speed: z.number().min(0).default(30),
  hitPoints: z.number().min(0).default(0),
  partyMembers: z.array(CharacterSummaryModel).default([]),
  savingThrowProficiencies: SavingThrowProficiencies,
});

export type CharacterSheet = z.infer<typeof CharacterSheet>;
