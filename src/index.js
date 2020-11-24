import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './store'
import MyApp from "./MyApp";

ReactDOM.render(
    <Provider store={store}>
        <MyApp />
    </Provider>
    ,
  document.getElementById('root')
);


