import { Flex } from '@chakra-ui/react';
import React from 'react';
import {
  ControlledLabelledInput,
  LabelledInput,
} from '../../custom-components/LabelledInput';
import {
  ControlledLabelledSelect,
  LabelledSelect,
} from '../../custom-components/LabelledSelect';
import {
  CharacterClass,
  CharacterRace,
} from '../../../enums/character-sheet-enums';

type Props = {
  control: any;
} & { [stylingProp: string]: any };

// TODO change these stylings to be variants
export const CharacterHeaderInfo = ({ control, ...stylingProps }: Props) => {
  return (
    <Flex {...stylingProps}>
      <Flex flexDirection={'column'}>
        <ControlledLabelledSelect
          name='characterClass'
          control={control}
          label='Class'
          options={Object.values(CharacterClass)}
          mb={'16px'}
        />
        <ControlledLabelledInput
          name='background'
          label='Background'
          control={control}
          mb={'16px'}
        />
      </Flex>

      <Flex flexDirection={'column'} mx={'16px'}>
        <ControlledLabelledSelect
          name='characterRace'
          control={control}
          label='Race'
          options={Object.values(CharacterRace)}
          mb={'16px'}
        />

        <ControlledLabelledInput
          name='alignment'
          control={control}
          label='Alignment'
        />
      </Flex>
    </Flex>
  );
};
