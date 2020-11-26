import React from 'react';
import { withRouter } from 'react-router-dom';
import decode from "jwt-decode";
import shortid from "shortid";

class LoginForm extends React.Component {
    state={
        userInfo:{
            username:'',
            password:''
        }
    }
    handleSubmit = async (e) =>{
        e.preventDefault();
        const { data } = await this.props.loginFn.loginAc(this.state.userInfo);
        if (data.status === 0 ){
            //存储token到本地
            window.localStorage.setItem("@Token",data.token)
            //同步用户状态和信息到redux
            this.props.loginFn.syncStateInfoAc(decode(data.token));
            //登录成功跳转到首页
            this.props.history.push('/');
            this.props.flashFn.addFlashAc({
                type:"alert-success",
                text:'登录成功',
                id:shortid.generate()
            });
            return ;

        }
        // console.log('data',data);
        this.props.flashFn.addFlashAc({
            type:"alert-danger",
            text:'登录失败',
            id:shortid.generate()
        });
    };
    handleChange = (e) =>{
        this.setState({
            userInfo:{
                ...this.state.userInfo,
                [e.target.name]:e.target.value
            }
        })
    };

    render() {
        const  { username,password } = this.state.userInfo;
        return (
            <form onSubmit={this.handleSubmit}>
                {/*用户名*/}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                           className="form-control"
                           id="username"
                           name="username"
                           defaultValue={username}
                           onChange={this.handleChange}
                    />
                    {/*<small id="emailHelp" className="form-text text-muted">*/}
                    {/*    We'll never share your email with anyone else.*/}
                    {/*</small>*/}
                </div>

                {/*密码*/}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           className="form-control"
                           name="password"
                           defaultValue={password}
                           onChange={this.handleChange}
                           id="password"/>
                </div>

                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        )
    }
}

export default withRouter(LoginForm);