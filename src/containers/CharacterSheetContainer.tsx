import React, { useState, useEffect, useReducer } from 'react';

import { Flex } from '@chakra-ui/react';
import { CharacterSheetHeader } from '../components/character-sheet/character-sheet-header/CharacterSheetHeader';
import { MAX_LEVEL } from '../constants/experience-points';
import { CharacterSheetAbilityScores } from '../components/character-sheet/CharacterSheetAbilityScores';
import { CharacterSheetBodyTabSelector } from '../components/character-sheet/character-sheet-body/CharacterSheetBodyTabSelector';
import {
  calculateModifierFromAbilityScore,
  calculateProficiencyBonus,
} from '../utils/calculation-utils';
import {
  CharacterClass,
  CharacterRace,
  SkillProficiencyLevel,
} from '../enums/character-sheet-enums';
import { CharacterSheetRepository } from '../repository/character-sheet-repository';
import { CharacterSheet } from '../models/character-sheet-models/character-sheet.model';
import { useForm } from 'react-hook-form';
import {
  AbilityScoreModifiers,
  AbilityScores,
  Skills,
} from '../models/character-sheet-models/ability-scores.model';

type Props = {};

const getInitialCharacterSheet = (): CharacterSheet => {
  return CharacterSheet.parse({
    characterName: 'Test Character',
    playerName: 'Test Player',
    characterClass: CharacterClass.Barbarian,
    alignment: 'Chaotic Good',
    background: 'Outlander',
    race: CharacterRace.Dragonborn,
    abilityScores: AbilityScores.parse({}),
    abilityScoreModifiers: AbilityScoreModifiers.parse({}),
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
  });
};

export const CharacterSheetContainer = (props: Props) => {
  const characterSheetRepo = new CharacterSheetRepository();
  const [existingCharacterSheet, setExistingCharacterSheet] = useState<
    CharacterSheet | undefined
  >(undefined);
  const { register, watch, setValue, control, reset } = useForm<CharacterSheet>(
    {
      defaultValues: getInitialCharacterSheet(),
    }
  );

  useEffect(() => {
    const getCharacterSheet = async () => {
      const characterSheet = await characterSheetRepo.getCharacterSheetById(
        '1'
      );
      console.log('characterSheet', characterSheet);
      setExistingCharacterSheet(characterSheet);
    };
    getCharacterSheet();
  }, []);

  useEffect(() => {
    if (existingCharacterSheet) {
      reset(existingCharacterSheet);
    }
  }, [existingCharacterSheet]);

  const watchedFormData = watch();

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
          abilityScoreModifiers={watchedFormData.abilityScoreModifiers}
          control={control}
        />
      </Flex>
    </form>
  );
};
