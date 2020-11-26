import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import decode from 'jwt-decode';

import store from './store'
import MyApp from "./MyApp";
import { syncStateInfoAc } from './pages/login/store'

const tk = localStorage.getItem('@Token');
//解析token并同步到redux

// if (tk) store.dispatch(syncStateInfoAc(decode(tk)));

ReactDOM.render(
    <Provider store={store}>
        <MyApp />
    </Provider>
    ,
  document.getElementById('root')
);


