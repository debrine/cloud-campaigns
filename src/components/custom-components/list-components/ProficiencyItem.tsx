import {
  Box,
  Button,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { SkillProficiencyLevel } from '../../../enums/character-sheet-enums';
import { faChevronDown, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { getTextColourForPositiveNegativeNumber } from '../../../utils/colour-utils';
import { set } from 'zod';

type ProficiencyOption = {
  icon: React.ReactElement;
  value: SkillProficiencyLevel;
  tooltipLabel: string;
};

type Props = {
  proficiencyOptions: ProficiencyOption[];
  skillName: string;
  value: number;
  setValue: (value: number) => void;
  modifierLabel?: string;
  minTextWidth?: string;
};

export const ProficiencyListItem = ({
  proficiencyOptions,
  skillName,
  modifierLabel,
  minTextWidth,
  value,
  setValue,
}: Props) => {
  const [selectedIcon, setSelectedIcon] = useState<
    React.ReactElement | undefined
  >(undefined);

  const handleSelect = (
    value: SkillProficiencyLevel,
    icon?: React.ReactElement
  ) => {
    setSelectedExpertiseLevel(value);
    setSelectedIcon(icon);
  };

  const incrementValue = () => {
    setValue(value + 1);
  };

  const decrementValue = () => {
    setValue(value - 1);
  };

  return (
    <Flex alignItems={'center'}>
      <Menu>
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

        <MenuList minWidth={'50px'}>
          {proficiencyOptions.map((option) => (
            <Tooltip
              key={option.tooltipLabel}
              label={option.tooltipLabel}
              aria-label={option.tooltipLabel}>
              <MenuItem
                onClick={() => handleSelect(option.value, option.icon)}
                key={option.tooltipLabel}>
                {option.icon}
              </MenuItem>
            </Tooltip>
          ))}
        </MenuList>
      </Menu>

      <Flex minWidth={minTextWidth}>
        <Text pr={'4px'} color={'text.primary'} fontWeight={700} pl={'16px'}>
          {skillName}
        </Text>
        {modifierLabel != null && (
          <Text color={'text.mutedDark'}>({modifierLabel})</Text>
        )}
      </Flex>

      <Divider orientation='vertical' mx='8px' />
      <NumberInput
        value={value > 0 ? '+' + value : value}
        width={'80px'}
        color={getTextColourForPositiveNegativeNumber(value)}
        variant={'flushed'}
        min={-5}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper
            border={'none'}
            color={'text.mutedDark'}
            onClick={() => incrementValue()}
          />
          <NumberDecrementStepper
            border={'none'}
            color={'text.mutedDark'}
            onClick={() => decrementValue()}
          />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  );
};
