import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { theme } from './theme/theme';
import { AppLogo } from './components/AppLogo';
import { AppRoutes } from './AppRoutes';

// TODO make side padding dynamic triggering on a minimum window width
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        className='App'
        bg='background.app'
        minHeight={'100vh'}
        py={'8px'}
        // px={'248px'}
        p={'16px'}>
        <header className='App-header'>
          <AppLogo />
        </header>
        <AppRoutes />
      </Box>
    </ChakraProvider>
  );
}

export default App;
