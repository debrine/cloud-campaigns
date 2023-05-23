import React from 'react';
import { AbilityScores } from '../../../../models/character-sheet-models/ability-scores.model';
import { Flex, Heading } from '@chakra-ui/react';
import { StyledFlexPanel } from '../../../custom-components/StyledFlexPanel';
import { ControlledProficiencyListItem } from '../../../custom-components/list-components/ProficiencyItem';
import { SkillProficiencyLevel } from '../../../../enums/character-sheet-enums';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  abilityScores: AbilityScores;
  control: any;
} & { [stylingProp: string]: any };

export const SavingThrowsList = ({
  abilityScores,
  control,
  ...stylingProps
}: Props) => {
  return (
    <Flex flexDirection={'column'} {...stylingProps}>
      <Heading color={'text.secondary'} textAlign={'left'}>
        Saving Throws
      </Heading>
      <StyledFlexPanel flexDirection='column' bg='background.container'>
        {Object.values(abilityScores).map(({ abilityName }) => {
          return (
            <ControlledProficiencyListItem
              name={`savingThrowProficiencies.${abilityName.toLowerCase()}`}
              key={abilityName}
              control={control}
              proficiencyOptions={[
                { value: SkillProficiencyLevel.None, tooltipLabel: 'None' },
                {
                  icon: <FontAwesomeIcon icon={faStarHalf} />,
                  value: SkillProficiencyLevel.Proficient,
                  tooltipLabel: 'Proficiency',
                },
              ]}
              skillName={abilityName}
              skillModifier={0}
              minTextWidth='190px'
            />
          );
        })}
      </StyledFlexPanel>
    </Flex>
  );
};
