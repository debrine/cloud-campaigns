import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { SkillOptionItem } from './SkillOptionItem';
import { StyledFlexPanel } from '../../../custom-components/StyledFlexPanel';
import {
  ControlledProficiencyListItem,
  ProficiencyListItem,
} from '../../../custom-components/list-components/ProficiencyItem';
import {
  AbilityScores,
  Skills,
} from '../../../../models/character-sheet-models/ability-scores.model';
import { calculateTotalSkillModifier } from '../../../../utils/calculation-utils';
import { SkillProficiencyLevel } from '../../../../enums/character-sheet-enums';
import { abilityLabelFromAbilityName } from '../../../../utils/character-sheet-utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

type Props = {
  proficiencyBonus: number;
  control: any;
  skills: Skills;
  abilityScores: AbilityScores;
} & { [stylingProp: string]: any };

export const SkillOptionList = ({
  skills,
  abilityScores,
  control,
  proficiencyBonus,
  ...stylingProps
}: Props) => {
  return (
    <Flex flexDirection={'column'} {...stylingProps}>
      <Heading color={'text.secondary'} textAlign={'left'}>
        Skills
      </Heading>
      <StyledFlexPanel
        flexDirection={'column'}
        bg='background.container'
        width='fit-content'>
        {Object.values(skills)
          .filter((val) => val != null)
          .map((skillDetails) => {
            return (
              <ControlledProficiencyListItem
                key={skillDetails.skillName}
                name={`skills.${skillDetails.skillName.toLowerCase()}`.replace(
                  /\s+/g,
                  ''
                )}
                control={control}
                skillName={skillDetails.skillName}
                skillModifier={calculateTotalSkillModifier(
                  abilityScores[
                    skillDetails.skillAbility as keyof AbilityScores
                  ].abilityModifier,
                  proficiencyBonus,
                  skillDetails.skillProficiencyLevel,
                  skillDetails.skillModifier
                )}
                modifierLabel={
                  abilityLabelFromAbilityName[
                    skillDetails.skillAbility as keyof typeof abilityLabelFromAbilityName
                  ]
                }
                minTextWidth='190px'
                proficiencyOptions={[
                  { value: SkillProficiencyLevel.None, tooltipLabel: 'None' },
                  {
                    icon: <FontAwesomeIcon icon={faStarHalf} />,
                    value: SkillProficiencyLevel.Proficient,
                    tooltipLabel: 'Proficiency',
                  },
                  {
                    icon: <FontAwesomeIcon icon={faStar} />,
                    value: SkillProficiencyLevel.Expert,
                    tooltipLabel: 'Expertise',
                  },
                ]}
              />
            );
          })}
      </StyledFlexPanel>
    </Flex>
  );
};
