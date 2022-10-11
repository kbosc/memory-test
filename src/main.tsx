import { ThemeProvider } from "styled-components";
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import { store } from "./store/store";
import { ThemeDefault } from './assets/styles/theme';
import { GlobalStyles } from "./assets/styles/globalStyles";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={ThemeDefault}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
