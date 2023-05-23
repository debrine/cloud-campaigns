import React from 'react';
import { Ability } from '../../../../models/character-sheet-models/ability.model';
import { Accordion } from '@chakra-ui/react';
import { AbilityListItem } from './AbilityListItem';

type Props = {
  abilities: Ability[];
};

export const AbilityList = ({ abilities }: Props) => {
  return (
    <Accordion allowMultiple>
      {abilities.map((ability) => {
        return <AbilityListItem ability={ability} key={ability.name} />;
      })}
    </Accordion>
  );
};
