import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

import { addFlashAc } from '../../src/pages/flash/store/actionCreators';

export default function (Comp) {
    class Auth extends React.Component{
        componentWillMount() {
            //如果没有登录就跳转到登录页
            if (this.props.isAuth === false){
                this.props.addFlashAc({
                    id:shortid.generate(),
                    type:'alert-success',
                    text:'请登录'
                })
                this.props.history.push('/login')
            }
        }
        componentWillUpdate(nextProps, nextState, nextContext) {
            if ( nextProps.isAuth === false ){
                this.props.history.push('/login');
            }
        }

        render() {
            return <Comp {...this.props} />
        }
    }
    const mapStateToProps = state => {
        return {
            isAuth: state.login.isAuth
        }
    };

    return connect(mapStateToProps, {addFlashAc})(Auth)
}

