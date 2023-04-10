import { z } from 'zod';

export const AbilityScores = z.object({
  strength: z.number().min(1).max(30),
  dexterity: z.number().min(1).max(30),
  constitution: z.number().min(1).max(30),
  intelligence: z.number().min(1).max(30),
  wisdom: z.number().min(1).max(30),
  charisma: z.number().min(1).max(30),
});

export type AbilityScores = z.infer<typeof AbilityScores>;

export const AbilityScoreModifiers = z.object({
  strengthModifier: z.number().min(-5).max(10),
  dexterityModifier: z.number().min(-5).max(10),
  constitutionModifier: z.number().min(-5).max(10),
  intelligenceModifier: z.number().min(-5).max(10),
  wisdomModifier: z.number().min(-5).max(10),
  charismaModifier: z.number().min(-5).max(10),
});

export type AbilityScoreModifiers = z.infer<typeof AbilityScoreModifiers>;
