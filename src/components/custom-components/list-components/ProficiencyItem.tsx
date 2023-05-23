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
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { getTextColourForPositiveNegativeNumber } from '../../../utils/colour-utils';
import { Controller } from 'react-hook-form';
type ProficiencyOption = {
  icon?: React.ReactElement;
  value: SkillProficiencyLevel;
  tooltipLabel: string;
};

type Props = {
  proficiencyOptions: ProficiencyOption[];
  skillName: string;
  skillModifier: number;
  incrementSkillModifier: () => void;
  decrementSkillModifier: () => void;
  setSkillProficiencyLevel: (value: SkillProficiencyLevel) => void;
  modifierLabel?: string;
  minTextWidth?: string;
};

export const ProficiencyListItem = ({
  proficiencyOptions,
  skillName,
  modifierLabel,
  minTextWidth,
  skillModifier,
  incrementSkillModifier,
  decrementSkillModifier,
  setSkillProficiencyLevel,
}: Props) => {
  const [selectedIcon, setSelectedIcon] = useState<
    React.ReactElement | undefined
  >(undefined);

  const handleProficiencySelect = (
    value: SkillProficiencyLevel,
    icon?: React.ReactElement
  ) => {
    setSkillProficiencyLevel(value);
    setSelectedIcon(icon);
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
          color={'gold'}
          rightIcon={
            <Box>
              <FontAwesomeIcon icon={faChevronDown} size='2xs' color='black' />
            </Box>
          }>
          {selectedIcon != null && selectedIcon}
        </MenuButton>

        <MenuList minWidth={'50px'}>
          {proficiencyOptions.map((option) => (
            <Tooltip
              key={option.tooltipLabel}
              label={option.tooltipLabel}
              aria-label={option.tooltipLabel}>
              <MenuItem
                onClick={() =>
                  handleProficiencySelect(option.value, option.icon)
                }
                color={'gold'}
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
        value={skillModifier > 0 ? '+' + skillModifier : skillModifier}
        width={'80px'}
        color={getTextColourForPositiveNegativeNumber(skillModifier)}
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

type ControlledProps = {
  name: string;
  control: any;
  proficiencyOptions: ProficiencyOption[];
  skillName: string;
  skillModifier: number;
  modifierLabel?: string;
  minTextWidth?: string;
};

export const ControlledProficiencyListItem = ({
  name,
  control,
  proficiencyOptions,
  skillName,
  modifierLabel,
  minTextWidth,
  skillModifier,
}: ControlledProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <ProficiencyListItem
          proficiencyOptions={proficiencyOptions}
          skillName={skillName}
          modifierLabel={modifierLabel}
          minTextWidth={minTextWidth}
          skillModifier={skillModifier}
          incrementSkillModifier={() =>
            onChange({
              ...value,
              skillModifier: value.skillModifier + 1,
            })
          }
          decrementSkillModifier={() =>
            onChange({
              ...value,
              skillModifier: value.skillModifier - 1,
            })
          }
          setSkillProficiencyLevel={(newValue: SkillProficiencyLevel) =>
            onChange({ ...value, skillProficiencyLevel: newValue })
          }
        />
      )}
    />
  );
};
