import React from 'react';
import { LevellingType } from '../../../enums/character-sheet-enums';
import { MilestoneLevelComponent } from '../../custom-components/level-components/MilestoneLevelComponent';
import { ExperienceBar } from '../../custom-components/level-components/ExperienceBar';

type Props = {
  levelType: LevellingType;
  level: number;
  levelUp: any; // TODO type this to level up function
} & { [stylingProp: string]: any };

export const CharacterHeaderLevel = ({
  levelType,
  level,
  levelUp,
  ...stylingProps
}: Props) => {
  return (
    <>
      {levelType === LevellingType.Milestone ? (
        <MilestoneLevelComponent level={level} levelUp={levelUp} />
      ) : (
        <ExperienceBar level={level} currentExperiencePoints={0} />
      )}
    </>
  );
};
