import React, { useState, useEffect } from 'react';

import { Flex } from '@chakra-ui/react';
import { CharacterSheetHeader } from '../components/character-sheet/character-sheet-header/CharacterSheetHeader';
import { MAX_LEVEL } from '../constants/experience-points';
import { CharacterSheetAbilityScores } from '../components/character-sheet/CharacterSheetAbilityScores';
import { CharacterSheetBodyTabSelector } from '../components/character-sheet/character-sheet-body/CharacterSheetBodyTabSelector';
import {
  calculateModifierFromAbilityScore,
  calculateProficiencyBonus,
} from '../utils/calculation-utils';
import { SkillProficiencyLevel } from '../enums/character-sheet-enums';

type Props = {};

type AbilityProficiency = {
  abilityModifier: number;
  proficiencyLevel: SkillProficiencyLevel;
};

export const CharacterSheetContainer = (props: Props) => {
  const [characterName, setCharacterName] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [race, setRace] = useState('');
  const [background, setBackground] = useState('');
  const [alignment, setAlignment] = useState('');
  const [level, setLevel] = useState(0);
  const [experiencePoints, setExperiencePoints] = useState(0);

  const [strength, setStrength] = useState(1);
  const [dexterity, setDexterity] = useState(1);
  const [constitution, setConstitution] = useState(1);
  const [intelligence, setIntelligence] = useState(1);
  const [wisdom, setWisdom] = useState(1);
  const [charisma, setCharisma] = useState(1);

  const [proficiencyBonus, setProficiencyBonus] = useState(
    calculateProficiencyBonus(level)
  );
  const [inspiration, setInspiration] = useState(0);

  // TODO is there a better way to do this?
  // skill modifiers
  const [acrobaticsModifier, setAcrobaticsModifier] =
    useState<AbilityProficiency>({
      abilityModifier: 0,
      proficiencyLevel: SkillProficiencyLevel.None,
    });
  const [animalHandlingModifier, setAnimalHandlingModifier] =
    useState<AbilityProficiency>({
      abilityModifier: 0,
      proficiencyLevel: SkillProficiencyLevel.None,
    });
  const [arcanaModifier, setArcanaModifier] = useState<AbilityProficiency>({
    abilityModifier: 0,
    proficiencyLevel: SkillProficiencyLevel.None,
  });
  const [athleticsModifier, setAthleticsModifier] =
    useState<AbilityProficiency>({
      abilityModifier: 0,
      proficiencyLevel: SkillProficiencyLevel.None,
    });
  const [deceptionModifier, setDeceptionModifier] =
    useState<AbilityProficiency>({
      abilityModifier: 0,
      proficiencyLevel: SkillProficiencyLevel.None,
    });
  const [historyModifier, setHistoryModifier] = useState<AbilityProficiency>({
    abilityModifier: 0,
    proficiencyLevel: SkillProficiencyLevel.None,
  });
  const [insightModifier, setInsightModifier] = useState<AbilityProficiency>({
    abilityModifier: 0,
    proficiencyLevel: SkillProficiencyLevel.None,
  });
  const [intimidationModifier, setIntimidationModifier] =
    useState<AbilityProficiency>({
      abilityModifier: 0,
      proficiencyLevel: SkillProficiencyLevel.None,
    });
  const [investigationModifier, setInvestigationModifier] =
    useState<AbilityProficiency>({
      abilityModifier: 0,
      proficiencyLevel: SkillProficiencyLevel.None,
    });
  const [medicineModifier, setMedicineModifier] = useState<AbilityProficiency>({
    abilityModifier: 0,
    proficiencyLevel: SkillProficiencyLevel.None,
  });
  const [natureModifier, setNatureModifier] = useState<AbilityProficiency>({
    abilityModifier: 0,
    proficiencyLevel: SkillProficiencyLevel.None,
  });
  const [perceptionModifier, setPerceptionModifier] =
    useState<AbilityProficiency>({
      abilityModifier: 0,
      proficiencyLevel: SkillProficiencyLevel.None,
    });
  const [performanceModifier, setPerformanceModifier] =
    useState<AbilityProficiency>({
      abilityModifier: 0,
      proficiencyLevel: SkillProficiencyLevel.None,
    });
  const [persuasionModifier, setPersuasionModifier] =
    useState<AbilityProficiency>({
      abilityModifier: 0,
      proficiencyLevel: SkillProficiencyLevel.None,
    });
  const [religionModifier, setReligionModifier] = useState<AbilityProficiency>({
    abilityModifier: 0,
    proficiencyLevel: SkillProficiencyLevel.None,
  });
  const [sleightOfHandModifier, setSleightOfHandModifier] =
    useState<AbilityProficiency>({
      abilityModifier: 0,
      proficiencyLevel: SkillProficiencyLevel.None,
    });
  const [stealthModifier, setStealthModifier] = useState<AbilityProficiency>({
    abilityModifier: 0,
    proficiencyLevel: SkillProficiencyLevel.None,
  });
  const [survivalModifier, setSurvivalModifier] = useState<AbilityProficiency>({
    abilityModifier: 0,
    proficiencyLevel: SkillProficiencyLevel.None,
  });

  useEffect(() => {
    setProficiencyBonus(calculateProficiencyBonus(level));
  }, [level]);

  // update this to be a backend function call
  const levelUp = (): void => {
    const newLevel = level + 1 <= MAX_LEVEL ? level + 1 : MAX_LEVEL;
    setLevel(newLevel);
  };

  return (
    <>
      <Flex>
        <CharacterSheetHeader
          characterName={characterName}
          setCharacterName={setCharacterName}
          characterClass={characterClass}
          setCharacterClass={setCharacterClass}
          race={race}
          setRace={setRace}
          background={background}
          setBackground={setBackground}
          alignment={alignment}
          setAlignment={setAlignment}
          experiencePoints={experiencePoints}
          setExperiencePoints={setExperiencePoints}
          level={level}
          setLevel={setLevel}
          levelUp={levelUp}
          proficiencyBonus={proficiencyBonus}
          inspiration={inspiration}
          setInspiration={setInspiration}
        />
      </Flex>
      <Flex>
        <CharacterSheetAbilityScores
          strength={strength}
          setStrength={setStrength}
          dexterity={dexterity}
          setDexterity={setDexterity}
          constitution={constitution}
          setConstitution={setConstitution}
          intelligence={intelligence}
          setIntelligence={setIntelligence}
          wisdom={wisdom}
          setWisdom={setWisdom}
          charisma={charisma}
          setCharisma={setCharisma}
        />
        <CharacterSheetBodyTabSelector
          proficiencyBonus={proficiencyBonus}
          dexterityModifier={calculateModifierFromAbilityScore(dexterity)}
          constitutionModifier={calculateModifierFromAbilityScore(constitution)}
          intelligenceModifier={calculateModifierFromAbilityScore(intelligence)}
          wisdomModifier={calculateModifierFromAbilityScore(wisdom)}
          charismaModifier={calculateModifierFromAbilityScore(charisma)}
          strengthModifier={calculateModifierFromAbilityScore(strength)}
          acrobaticsModifier={acrobaticsModifier}
          animalHandlingModifier={animalHandlingModifier}
          arcanaModifier={arcanaModifier}
          athleticsModifier={athleticsModifier}
          deceptionModifier={deceptionModifier}
          historyModifier={historyModifier}
          insightModifier={insightModifier}
          intimidationModifier={intimidationModifier}
          investigationModifier={investigationModifier}
          medicineModifier={medicineModifier}
          natureModifier={natureModifier}
          perceptionModifier={perceptionModifier}
          performanceModifier={performanceModifier}
          persuasionModifier={persuasionModifier}
          religionModifier={religionModifier}
          sleightOfHandModifier={sleightOfHandModifier}
          stealthModifier={stealthModifier}
          survivalModifier={survivalModifier}
          setAcrobaticsModifier={setAcrobaticsModifier}
          setAnimalHandlingModifier={setAnimalHandlingModifier}
          setArcanaModifier={setArcanaModifier}
          setAthleticsModifier={setAthleticsModifier}
          setDeceptionModifier={setDeceptionModifier}
          setHistoryModifier={setHistoryModifier}
          setInsightModifier={setInsightModifier}
          setIntimidationModifier={setIntimidationModifier}
          setInvestigationModifier={setInvestigationModifier}
          setMedicineModifier={setMedicineModifier}
          setNatureModifier={setNatureModifier}
          setPerceptionModifier={setPerceptionModifier}
          setPerformanceModifier={setPerformanceModifier}
          setPersuasionModifier={setPersuasionModifier}
          setReligionModifier={setReligionModifier}
          setSleightOfHandModifier={setSleightOfHandModifier}
          setStealthModifier={setStealthModifier}
          setSurvivalModifier={setSurvivalModifier}
        />
      </Flex>
    </>
  );
};
