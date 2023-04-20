import React from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { CharacterSummaryModel } from '../../../../../models/character-sheet-models/character-summary.model';

type Props = CharacterSummaryModel & {
  [stylingProp: string]: any;
};

export const CharacterSheetPartyMemberListItem = ({
  characterName,
  playerName,
  characterRace,
  characterClass,
  characterLevel,
  ...stylingProps
}: Props) => {
  return (
    <AccordionItem borderColor={'text.secondary'}>
      <h2>
        <AccordionButton>
          <Flex flex='1' textAlign='left' color='text.primary' my={'4px'}>
            <Flex flexDirection={'column'} width={'200px'}>
              <Text color={'text.primary'} fontWeight={700}>
                {characterName}
              </Text>
              <Text fontStyle={'italic'} color={'text.secondary'}>
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
        <Textarea />
      </AccordionPanel>
    </AccordionItem>
  );
};
