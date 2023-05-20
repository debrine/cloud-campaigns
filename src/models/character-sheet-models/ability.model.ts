import { z } from 'zod';

export enum AbilityClass {
  Class = 'Class',
  Racial = 'Racial',
  Feat = 'Feat',
  Item = 'Item',
}

export const Ability = z.object({
  name: z.string(),
  abilityClass: z.nativeEnum(AbilityClass),
  description: z.string(),
  isCombat: z.boolean(),
  isPassive: z.boolean(),
  range: z.number().optional(),
  cooldown: z.number().optional(),
  charges: z.number().optional(),
  duration: z.number().optional(),
  damage: z.number().optional(),
  damageType: z.string().optional(),
});

export type Ability = z.infer<typeof Ability>;
