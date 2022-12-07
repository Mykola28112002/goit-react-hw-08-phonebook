import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/goit-react-hw-08-phonebook'>
      <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App/>
          </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
