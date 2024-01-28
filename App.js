import React from 'react';
import Main from './src/App';
import {Provider} from 'react-redux';
import {Store, persistor} from './src/Utils/Store';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
