import React from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Text,
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Ability,
  AbilityClass,
} from '../../../../models/character-sheet-models/ability.model';
import { IconDefinition, icon } from '@fortawesome/fontawesome-svg-core';
import {
  faMagicWandSparkles,
  faPeopleGroup,
  faLockOpen,
  faFlask,
  faFistRaised,
  faEllipsisVertical,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

type Props = {
  ability: Ability;
  showIcon?: boolean;
};

export const AbilityListItem = ({ ability, showIcon = false }: Props) => {
  return (
    <AccordionItem borderColor={'background.divider'}>
      {({ isExpanded }) => (
        <>
          <AccordionButton>
            <Flex my={'4px'} justifyContent={'space-between'} width='100%'>
              <Flex>
                <Box
                  color='text.secondary'
                  display={showIcon ? 'block' : 'none'}>
                  <FontAwesomeIcon
                    icon={
                      getAbilityIconNameFromAbilityClass[ability.abilityClass]
                    }
                    size='2xl'
                    width={'40px'}
                    height={'40px'}
                  />
                </Box>
                <Text
                  whiteSpace={'nowrap'}
                  fontWeight={700}
                  mx='8px'
                  color={'text.primary'}>
                  {ability.name}
                </Text>
                {ability.isCombat && (
                  <Box color={'red'}>
                    <FontAwesomeIcon icon={faFistRaised} />
                  </Box>
                )}
              </Flex>
              {!isExpanded && (
                <Text
                  color={'text.pastelBlue'}
                  noOfLines={1}
                  maxHeight={'24px'}
                  width={'fit-content'}>
                  {ability.description}
                </Text>
              )}
              <AccordionIcon />
            </Flex>
          </AccordionButton>
          <AccordionPanel pb={4} color='text.pastelBlue'>
            <Flex justifyContent={'flex-end'} mb='16px'>
              {' '}
              <AbilityListItemMenuButton
              // removeAbility={() => removeAbility(id)}
              // openEditPartyMemberModal={() =>
              //   openEditPartyMemberModal({
              //     characterName,
              //     playerName,
              //     characterRace,
              //     characterClass,
              //     characterLevel,
              //     id,
              //   })
              // }
              />
            </Flex>
            {!ability.isActive && (
              <Flex flexDirection={'column'} mb='16px'>
                {ability.range != null && (
                  <Flex>
                    <Text fontWeight={'bold'} pr={'8px'}>
                      Range:{' '}
                    </Text>
                    <Text>{ability.range}</Text>
                  </Flex>
                )}
                {ability.duration != null && (
                  <Flex>
                    <Text fontWeight={'bold'} pr={'8px'}>
                      Duration:{' '}
                    </Text>
                    <Text>{ability.duration}</Text>
                  </Flex>
                )}
                {ability.cooldown != null && ability.charges != null && (
                  <Flex>
                    <Text fontWeight={'bold'} pr={'8px'}>
                      Uses:{' '}
                    </Text>
                    <Text>
                      {ability.charges} per {ability.cooldown}
                    </Text>
                  </Flex>
                )}
                {ability.damageDice != null && ability.damageType != null && (
                  <Flex>
                    <Text fontWeight={'bold'} pr={'8px'}>
                      Damage Roll:{' '}
                    </Text>
                    <Text>
                      {ability.damageDice} {ability.damageType} damage
                    </Text>
                  </Flex>
                )}
              </Flex>
            )}
            <Text textAlign={'left'}>{ability.description}</Text>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

type ButtonProps = {
  removeAbility: () => void;
  openEditAbilityModal: () => void;
};

const AbilityListItemMenuButton = ({
  removeAbility,
  openEditAbilityModal,
  ...stylingProps
}: ButtonProps) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<FontAwesomeIcon icon={faEllipsisVertical} />}
        variant='none'
        _hover={{
          color: 'text.secondary',
        }}
      />
      <MenuList color={'black'}>
        <MenuItem onClick={() => openEditAbilityModal()}>
          <Flex justifyContent={'space-between'} width={'100%'} lineHeight={1}>
            Edit Ability
            <FontAwesomeIcon icon={faPenToSquare} />
          </Flex>
        </MenuItem>
        <MenuItem onClick={() => removeAbility()}>
          <Flex justifyContent={'space-between'} width={'100%'} lineHeight={1}>
            Forget Ability
            <FontAwesomeIcon icon={faTrash} />
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const getAbilityIconNameFromAbilityClass: Record<AbilityClass, IconDefinition> =
  {
    [AbilityClass.Class]: faMagicWandSparkles,
    [AbilityClass.Racial]: faPeopleGroup,
    [AbilityClass.Feat]: faLockOpen,
    [AbilityClass.Item]: faFlask,
  };
