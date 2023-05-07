import React, { useState } from 'react';
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Tooltip,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faStar,
  faStarHalf,
} from '@fortawesome/free-solid-svg-icons';
import { SkillProficiencyLevel } from '../../../../enums/character-sheet-enums';
import { calculateTotalSkillModifier } from '../../../../utils/calculation-utils';
import { getTextColourForPositiveNegativeNumber } from '../../../../utils/colour-utils';

type Props = {
  proficiencyBonus: number;
  skillName: string;
  modifierLabel: string;
  abilityScoreModifier: number;
  skillModifier: number;
  setSkillModifier: (value: number) => void;
  // add in fetching expertise levels
};

type IconType = React.ReactElement | undefined;

// TODO make this less big
export const SkillOptionItem: React.FC<Props> = ({
  proficiencyBonus,
  skillName,
  modifierLabel,
  abilityScoreModifier,
  skillModifier,
  setSkillModifier,
}: Props) => {
  const [selectedExpertiseLevel, setSelectedExpertiseLevel] =
    useState<SkillProficiencyLevel>(SkillProficiencyLevel.None);
  const [selectedIcon, setSelectedIcon] = useState<IconType>(undefined);

  const totalSkillModifier = calculateTotalSkillModifier(
    abilityScoreModifier,
    proficiencyBonus,
    selectedExpertiseLevel,
    skillModifier
  );

  const handleSelect = (value: SkillProficiencyLevel, icon?: IconType) => {
    setSelectedExpertiseLevel(value);
    setSelectedIcon(icon);
  };

  const incrementSkillModifier = () => {
    setSkillModifier(skillModifier + 1);
  };

  const decrementSkillModifier = () => {
    setSkillModifier(skillModifier - 1);
  };

  return (
    <Flex alignItems={'center'}>
      <Menu>
        <Tooltip
          label='Skill Proficiency Level'
          aria-label='Skill Proficiency Level'>
          <MenuButton
            p={'4px'}
            as={Button}
            bg={'transparent'}
            variant={'outline'}
            height={'fit-content'}
            width={'fit-content'}
            minWidth={'46px'}
            rightIcon={
              <Box>
                <FontAwesomeIcon icon={faChevronDown} size='2xs' />
              </Box>
            }>
            {selectedIcon}
          </MenuButton>
        </Tooltip>
        <MenuList minWidth={'50px'}>
          <Tooltip label='None' aria-label='None'>
            <MenuItem
              height={'28px'}
              onClick={() =>
                handleSelect(SkillProficiencyLevel.None)
              }></MenuItem>
          </Tooltip>

          <Tooltip label='Proficiency' aria-label='Proficiency'>
            <MenuItem
              onClick={() =>
                handleSelect(
                  SkillProficiencyLevel.Proficient,
                  <FontAwesomeIcon icon={faStarHalf} color='gold' />
                )
              }>
              <FontAwesomeIcon icon={faStarHalf} color='gold' />
            </MenuItem>
          </Tooltip>

          <Tooltip label='Expertise' aria-label='Expertise'>
            <MenuItem
              onClick={() =>
                handleSelect(
                  SkillProficiencyLevel.Expert,
                  <FontAwesomeIcon icon={faStar} color='gold' />
                )
              }>
              <FontAwesomeIcon icon={faStar} color='gold' />
            </MenuItem>
          </Tooltip>
        </MenuList>
      </Menu>

      <Flex minWidth={'185px'}>
        <Text pr={'4px'} color={'text.primary'} fontWeight={700} pl={'16px'}>
          {skillName}
        </Text>
        <Text color={'text.mutedDark'}>({modifierLabel})</Text>
      </Flex>

      <Divider orientation='vertical' mx='8px' />
      <NumberInput
        value={
          totalSkillModifier > 0 ? '+' + totalSkillModifier : totalSkillModifier
        }
        width={'80px'}
        color={getTextColourForPositiveNegativeNumber(totalSkillModifier)}
        variant={'flushed'}
        min={-5}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper
            border={'none'}
            color={'text.mutedDark'}
            onClick={() => incrementSkillModifier()}
          />
          <NumberDecrementStepper
            border={'none'}
            color={'text.mutedDark'}
            onClick={() => decrementSkillModifier()}
          />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  );
};
