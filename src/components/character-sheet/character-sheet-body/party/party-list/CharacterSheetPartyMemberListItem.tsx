import React from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Text,
  Textarea,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { CharacterSummaryModel } from '../../../../../models/character-sheet-models/character-summary.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

type Props = CharacterSummaryModel & {
  removePartyMember: (
    partyMemberIdToRemove: CharacterSummaryModel['id']
  ) => void;
  openEditPartyMemberModal: (partyMemberToEdit: CharacterSummaryModel) => void;
} & {
  [stylingProp: string]: any;
};

export const CharacterSheetPartyMemberListItem = ({
  characterName,
  playerName,
  characterRace,
  characterClass,
  characterLevel,
  id,
  removePartyMember,
  openEditPartyMemberModal,
  ...stylingProps
}: Props) => {
  return (
    <AccordionItem borderColor={'background.divider'}>
      <h2>
        <AccordionButton>
          <Flex flex='1' textAlign='left' color='text.primary' my={'4px'}>
            <Flex flexDirection={'column'} width={'200px'}>
              <Text
                color={'text.primary'}
                fontWeight={700}
                _expanded={{ display: 'none' }}>
                {characterName}
              </Text>
              <Text fontStyle={'italic'} color={'text.pastelBlue'}>
                {playerName}
              </Text>
            </Flex>
            <Flex flexDirection={'column'} mr={'32px'}>
              <Text color={'text.primary'}>
                {characterClass}
                {characterLevel && ` - Level ${characterLevel}`}
              </Text>
              <Text color={'text.primary'}>{characterRace}</Text>
            </Flex>
          </Flex>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} color='text.primary'>
        <Flex justifyContent={'flex-end'} mb='16px'>
          {' '}
          <CharacterSheetPartyMemberListItemMenuButton
            removeMember={() => removePartyMember(id)}
            openEditPartyMemberModal={() =>
              openEditPartyMemberModal({
                characterName,
                playerName,
                characterRace,
                characterClass,
                characterLevel,
                id,
              })
            }
          />
        </Flex>
        <Textarea color={'theme.pastelBlue'} />
      </AccordionPanel>
    </AccordionItem>
  );
};

type ButtonProps = {
  removeMember: () => void;
  openEditPartyMemberModal: () => void;
};

const CharacterSheetPartyMemberListItemMenuButton = ({
  removeMember,
  openEditPartyMemberModal,
}: ButtonProps) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={
          <FontAwesomeIcon
            icon={icon({ name: 'ellipsis-vertical', style: 'solid' })}
          />
        }
        variant='none'
        _hover={{
          color: 'text.secondary',
        }}
      />
      <MenuList color={'black'}>
        <MenuItem onClick={() => openEditPartyMemberModal()}>
          <Flex justifyContent={'space-between'} width={'100%'} lineHeight={1}>
            Edit Party Member
            <FontAwesomeIcon
              icon={icon({ name: 'pen-to-square', style: 'solid' })}
            />
          </Flex>
        </MenuItem>
        <MenuItem onClick={() => removeMember()}>
          <Flex justifyContent={'space-between'} width={'100%'} lineHeight={1}>
            Kill Party Member
            <FontAwesomeIcon
              icon={icon({ name: 'skull-crossbones', style: 'solid' })}
            />
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
