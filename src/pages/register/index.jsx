import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators} from "redux";

import { actionCreators as registerActionCreator } from './store'
import RegisterForm from "./registerForm";

class Register extends React.Component {
    render() {
        return(
            <RegisterForm  {...this.props} />
        )
    }

}
const mapStateToProps = state =>{
    return {
        registerData:state.register
    }
};
const mapDispatchToProps = dispatch => {
    return {
        registerFn:bindActionCreators(registerActionCreator,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);