import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const colors = {
  bisque_lite: '#d1eeee',
  bisque_middle: '#b4cdcd',
  bisque_dark: '#7a8b8b',
  orange: '#ffa500',
  black: '#212121',
  add:	'#8b3a62'
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
