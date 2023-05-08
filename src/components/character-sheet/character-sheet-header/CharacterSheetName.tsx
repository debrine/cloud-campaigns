import React from 'react';
import { LabelledInput } from '../../custom-components/LabelledInput';

type Props = {
  register: any; // TODO type this to register function
} & { [stylingProp: string]: any };

export const CharacterSheetName = ({ register, ...stylingProps }: Props) => {
  return (
    <LabelledInput
      label={'Character Name'}
      {...register('characterName')}
      {...stylingProps}
    />
  );
};
