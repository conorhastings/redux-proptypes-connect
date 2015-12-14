import React from 'react';
import { render } from 'react-dom';
import Animals from './animals';
import Colors from './colors';
import { Provider } from 'react-redux';
import store from "./store";

const App = () => {
  return (
    <div>
      <Colors />
      <Animals />
    </div>
  );
};


render(<Provider store={store}><App /></Provider>, document.getElementById('app'));