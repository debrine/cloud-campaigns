import { Box, Flex } from '@chakra-ui/layout';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import React from 'react';

type Props = {
  proficiencyBonus: number;
};

export const CharacterSheetBodySkillDetails = (props: Props) => {
  return (
    <Flex>
      <Flex>
        <Box>
          <Stat>
            <StatLabel>Proficiency Bonus</StatLabel>
            <StatNumber>
              {props.proficiencyBonus > 0
                ? `+${props.proficiencyBonus}`
                : props.proficiencyBonus}
            </StatNumber>
          </Stat>
        </Box>
      </Flex>
    </Flex>
  );
};
