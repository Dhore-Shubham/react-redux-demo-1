import React from 'react';
import './style.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}
