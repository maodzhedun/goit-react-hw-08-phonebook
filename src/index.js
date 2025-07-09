import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import { Provider as ReduxProvider } from 'react-redux'; // Renamed to avoid conflict
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
// import {ChakraProvider} from '@chakra-ui/react';
import { Provider as ChakraProvider } from './components/ui/provider'; // Renamed to avoid conflict
import { App } from './components/App/App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
        <App />
        </ChakraProvider>
      </PersistGate>
    </ReduxProvider>
  </BrowserRouter>
);
