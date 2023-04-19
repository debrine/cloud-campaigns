import { z } from 'zod';

export const CharacterSummaryModel = z.object({
  id: z.string(), // UUID Type?
  characterName: z.string(),
  playerName: z.string(),
  characterClass: z.string(), // Enum?
  characterLevel: z.number().optional(),
  characterRace: z.string(), // Enum?
});

export type CharacterSummaryModel = z.infer<typeof CharacterSummaryModel>;
