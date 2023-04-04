import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { theme } from './theme/theme';
import { AppLogo } from './components/AppLogo';
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box className='App' bg='background.app' minHeight={'100vh'} p={'8px'}>
        <header className='App-header'>
          <AppLogo />
        </header>
        <AppRoutes />
      </Box>
    </ChakraProvider>
  );
}

export default App;
