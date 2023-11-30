import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const colors = {
  bisque_lite: '#ffe4c4',
  bisque_middle: '#cdb79e',
  bisque_dark: '#8b7d6b',
  orange: '	#ffa500',
  black: '#212121',
  add:	'#97ffff'
}
  const radius= {
    sm: '4px',
    md: '8px',
    lg: '12px',
  }
const theme = extendTheme({
  colors,
  radius,
  spacing: value => `${value * 4}px`,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <App />
            <GlobalStyle />
          </ChakraProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
