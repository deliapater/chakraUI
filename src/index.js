import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import App from './App';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraProvider>
);