import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);