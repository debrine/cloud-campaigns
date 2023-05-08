import { z } from 'zod';
import {
  Ability,
  SkillProficiencyLevel,
} from '../../enums/character-sheet-enums';

export const AbilityScores = z.object({
  strength: z.number().min(1).max(30).default(10),
  dexterity: z.number().min(1).max(30).default(10),
  constitution: z.number().min(1).max(30).default(10),
  intelligence: z.number().min(1).max(30).default(10),
  wisdom: z.number().min(1).max(30).default(10),
  charisma: z.number().min(1).max(30).default(10),
});

export type AbilityScores = z.infer<typeof AbilityScores>;

export const AbilityScoreModifiers = z.object({
  strength: z.number().min(-5).max(10).default(0),
  dexterity: z.number().min(-5).max(10).default(0),
  constitution: z.number().min(-5).max(10).default(0),
  intelligence: z.number().min(-5).max(10).default(0),
  wisdom: z.number().min(-5).max(10).default(0),
  charisma: z.number().min(-5).max(10).default(0),
});

export type AbilityScoreModifiers = z.infer<typeof AbilityScoreModifiers>;

export const SkillDetails = z.object({
  skillName: z.string(),
  skillProficiencyLevel: z.nativeEnum(SkillProficiencyLevel),
  skillModifier: z.number().min(-5).max(10),
  skillAbility: z.string(), // enum?
});

export type SkillDetails = z.infer<typeof SkillDetails>;

export const Skills = z.object({
  acrobatics: SkillDetails.default({
    skillName: 'Acrobatics',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Dexterity,
  }),
  animalhandling: SkillDetails.default({
    skillName: 'Animal Handling',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Wisdom,
  }),
  arcana: SkillDetails.default({
    skillName: 'Arcana',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Intelligence,
  }),
  athletics: SkillDetails.default({
    skillName: 'Athletics',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Strength,
  }),
  deception: SkillDetails.default({
    skillName: 'Deception',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Charisma,
  }),
  history: SkillDetails.default({
    skillName: 'History',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Intelligence,
  }),
  insight: SkillDetails.default({
    skillName: 'Insight',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Wisdom,
  }),
  intimidation: SkillDetails.default({
    skillName: 'Intimidation',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Charisma,
  }),
  investigation: SkillDetails.default({
    skillName: 'Investigation',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Intelligence,
  }),
  medicine: SkillDetails.default({
    skillName: 'Medicine',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Wisdom,
  }),
  nature: SkillDetails.default({
    skillName: 'Nature',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Intelligence,
  }),
  perception: SkillDetails.default({
    skillName: 'Perception',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Wisdom,
  }),
  performance: SkillDetails.default({
    skillName: 'Performance',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Charisma,
  }),
  persuasion: SkillDetails.default({
    skillName: 'Persuasion',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Charisma,
  }),
  religion: SkillDetails.default({
    skillName: 'Religion',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Intelligence,
  }),
  sleightofhand: SkillDetails.default({
    skillName: 'Sleight of Hand',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Dexterity,
  }),
  stealth: SkillDetails.default({
    skillName: 'Stealth',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Dexterity,
  }),
  survival: SkillDetails.default({
    skillName: 'Survival',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: Ability.Wisdom,
  }),
});

export type Skills = z.infer<typeof Skills>;
