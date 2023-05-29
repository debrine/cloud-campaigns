import React, { useState, useEffect } from 'react';

import { Flex } from '@chakra-ui/react';
import { CharacterSheetHeader } from '../components/character-sheet/character-sheet-header/CharacterSheetHeader';
import { MAX_LEVEL } from '../constants/experience-points';
import { CharacterSheetAbilityScores } from '../components/character-sheet/CharacterSheetAbilityScores';
import { CharacterSheetBodyTabSelector } from '../components/character-sheet/character-sheet-body/CharacterSheetBodyTabSelector';
import { CharacterClass, CharacterRace } from '../enums/character-sheet-enums';
import { CharacterSheetRepository } from '../repository/character-sheet-repository';
import { CharacterSheet } from '../models/character-sheet-models/character-sheet.model';
import { useForm } from 'react-hook-form';
import {
  AbilityScores,
  SavingThrowProficiencies,
  Skills,
} from '../models/character-sheet-models/ability-scores.model';
import { AbilityClass } from '../models/character-sheet-models/ability.model';

type Props = {};

// get rid of this
const getInitialCharacterSheet = (): CharacterSheet => {
  return CharacterSheet.parse({
    characterName: 'Test Character',
    playerName: 'Test Player',
    characterClass: CharacterClass.Barbarian,
    alignment: 'Chaotic Good',
    background: 'Outlander',
    race: CharacterRace.Dragonborn,
    abilityScores: AbilityScores.parse({}),
    skills: Skills.parse({}),
    partyMembers: [
      {
        id: '1',
        characterName: 'Test Character 1',
        playerName: 'Test Player 1',
        characterClass: CharacterClass.Barbarian,
        characterLevel: 1,
        characterRace: CharacterRace.Dragonborn,
      },
    ],
    savingThrowProficiencies: SavingThrowProficiencies.parse({}),
    abilities: {
      class: [
        {
          name: 'Breath Weapon 1',
          description:
            'You can use your action to exhale destructive energy. It deals damage in an area according to your ancestry. When you use your breath weapon, all creatures in the area must make a saving throw, the type of which is determined by your ancestry. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. After using your breath weapon, you cannot use it again until you complete a short or long rest. HBInstead, you may use your breath weapon a number of times equal to your Constitution modifier. You regain expended uses on a short or long rest.',
          isCombat: true,
          isActive: false,
          abilityClass: AbilityClass.Class,
          range: '120 ft.',
          damageType: 'Acid',
          damageDice: '2d6',
          duration: 'Instantaneous',
          cooldown: 'Short Rest',
          charges: 'PB',
        },
      ],
      racial: [
        {
          name: 'Breath Weapon 2',
          description:
            'You can use your action to exhale destructive energy. It deals damage in an area according to your ancestry. When you use your breath weapon, all creatures in the area must make a saving throw, the type of which is determined by your ancestry. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. After using your breath weapon, you cannot use it again until you complete a short or long rest. HBInstead, you may use your breath weapon a number of times equal to your Constitution modifier. You regain expended uses on a short or long rest.',
          isCombat: true,
          isActive: false,
          abilityClass: AbilityClass.Racial,
        },
        {
          name: 'Breath Weapon 4',
          description:
            'You can use your action to exhale destructive energy. It deals damage in an area according to your ancestry. When you use your breath weapon, all creatures in the area must make a saving throw, the type of which is determined by your ancestry. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. After using your breath weapon, you cannot use it again until you complete a short or long rest. HBInstead, you may use your breath weapon a number of times equal to your Constitution modifier. You regain expended uses on a short or long rest.',
          isCombat: true,
          isActive: false,
          abilityClass: AbilityClass.Racial,
        },
        {
          name: 'Breath Weapon 5',
          description:
            'You can use your action to exhale destructive energy. It deals damage in an area according to your ancestry. When you use your breath weapon, all creatures in the area must make a saving throw, the type of which is determined by your ancestry. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. After using your breath weapon, you cannot use it again until you complete a short or long rest. HBInstead, you may use your breath weapon a number of times equal to your Constitution modifier. You regain expended uses on a short or long rest.',
          isCombat: true,
          isActive: false,
          abilityClass: AbilityClass.Racial,
        },
      ],
      feat: [
        {
          name: 'Breath Weapon 6',
          description:
            'You can use your action to exhale destructive energy. It deals damage in an area according to your ancestry. When you use your breath weapon, all creatures in the area must make a saving throw, the type of which is determined by your ancestry. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. After using your breath weapon, you cannot use it again until you complete a short or long rest. HBInstead, you may use your breath weapon a number of times equal to your Constitution modifier. You regain expended uses on a short or long rest.',
          isCombat: true,
          isActive: false,
          abilityClass: AbilityClass.Feat,
        },
      ],
      item: [
        {
          name: 'Breath Weapon 7',
          description:
            'You can use your action to exhale destructive energy. It deals damage in an area according to your ancestry. When you use your breath weapon, all creatures in the area must make a saving throw, the type of which is determined by your ancestry. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. After using your breath weapon, you cannot use it again until you complete a short or long rest. HBInstead, you may use your breath weapon a number of times equal to your Constitution modifier. You regain expended uses on a short or long rest.',
          isCombat: false,
          isActive: false,
          abilityClass: AbilityClass.Item,
        },
      ],
    },
  });
};

export const CharacterSheetContainer = (props: Props) => {
  const characterSheetRepo = new CharacterSheetRepository();
  const [existingCharacterSheet, setExistingCharacterSheet] = useState<
    CharacterSheet | undefined
  >(undefined);
  const { watch, setValue, control, reset } = useForm<CharacterSheet>({
    defaultValues: getInitialCharacterSheet(),
  });

  useEffect(() => {
    const getCharacterSheet = async () => {
      const characterSheet = await characterSheetRepo.getCharacterSheetById(
        '1'
      );
      console.log('characterSheet', characterSheet);
      setExistingCharacterSheet(characterSheet);
    };
    getCharacterSheet();
  });

  useEffect(() => {
    if (existingCharacterSheet) {
      reset(existingCharacterSheet);
    }
  }, [existingCharacterSheet]);

  const watchedFormData = watch();

  useEffect(() => {
    console.log('new form data', watchedFormData);
  }, [watchedFormData]);

  // update this to be a backend function call
  const levelUp = () => {
    const newLevel =
      watchedFormData.characterLevel + 1 <= MAX_LEVEL
        ? watchedFormData.characterLevel + 1
        : MAX_LEVEL;
    setValue('characterLevel', newLevel);
  };

  return (
    <form>
      <Flex>
        <CharacterSheetHeader
          control={control}
          levelUp={levelUp}
          level={watchedFormData.characterLevel}
        />
      </Flex>
      <Flex>
        <CharacterSheetAbilityScores control={control} />
        <CharacterSheetBodyTabSelector
          proficiencyBonus={watchedFormData.proficiencyBonus}
          skills={watchedFormData.skills}
          abilities={watchedFormData.abilities}
          abilityScores={watchedFormData.abilityScores}
          control={control}
          setValue={setValue}
        />
      </Flex>
    </form>
  );
};
