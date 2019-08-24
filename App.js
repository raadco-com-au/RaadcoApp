import React, { Fragment } from 'react';
import MyContainer from './src/components/MyContainer';
import { Provider } from 'react-redux'

import configureStore from './src/Redux/state/configureStore'
const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <MyContainer />
      </Fragment>
    </Provider>
  );
};


export default App;