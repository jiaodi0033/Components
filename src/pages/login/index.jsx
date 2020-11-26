import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from "redux";

import { actionCreators as loginActionCreators} from './store';
import {actionCreators as flashActionCreators} from '../flash/store'

import LoginForm from "./loginForm";

class Login extends React.Component {
    render() {
        return(
            <LoginForm { ...this.props } />
        )
    }

}

const mapStateToProps =state =>{
    return {
        loginData:state.login
    }
};

const mapDispatchToProps =dispatch =>{
    return {
        loginFn:bindActionCreators(loginActionCreators,dispatch),
        flashFn:bindActionCreators(flashActionCreators,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);