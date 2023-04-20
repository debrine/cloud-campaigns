import { Flex, Image, Box } from '@chakra-ui/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import './custom-components.css';

type Props = {
  src: string;
} & { [stylingProp: string]: any };

export const EditableImage = ({ src, ...stylingProps }: Props) => {
  return (
    <Flex {...stylingProps} position={'relative'} className='hiddenContainer'>
      <Box
        zIndex={1}
        position={'absolute'}
        left={'50%'}
        top={'50%'}
        margin='auto'
        transform={'translate(-50%, -50%)'}>
        <FontAwesomeIcon
          className='hidden'
          icon={icon({ name: 'pen-to-square', style: 'solid' })}
        />
      </Box>
      <Image height={'100%'} src={src} className='blur' />
    </Flex>
  );
};
