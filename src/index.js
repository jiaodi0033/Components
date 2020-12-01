import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import decode from 'jwt-decode';

import store from './store'
import MyApp from "./MyApp";
import { syncStateInfoAc } from './pages/login/store/actionCreators'

const tk = localStorage.getItem('@Token');
console.log('token',tk);
//解析token并同步到redux

if (tk) {
    try{
        store.dispatch(syncStateInfoAc(decode(tk)));
    }catch (err) {
        localStorage.removeItem('@Token');
        window.location.href = './login';
    }

}

ReactDOM.render(
    <Provider store={store}>
        <MyApp />
    </Provider>
    ,
  document.getElementById('root')
);
