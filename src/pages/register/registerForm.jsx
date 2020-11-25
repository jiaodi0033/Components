import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import shortid from 'shortid';


class RegisterForm extends React.Component {
    state={
        userInfo:{
            username:'',
            email:'',
            password:'',
            confirmPassword:'',
        },
        errMsg:[]
    }
    handleSubmit = async (e) =>{
        e.preventDefault();
        this.setState({ errMsg:[] });
        const { data } =await this.props.registerFn.registerAc(this.state.userInfo);
        if ( data.status === 1) {
            return this.setState({
                errMsg:data.msg
            });
        }
        // console.log(this.props.registerData.username)
        this.props.history.push('/');
        this.props.flashFn.addFlashAc({
            type:"alert-success",
            text:'注册成功',
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
        const {username,email,password,confirmPassword}=this.state.userInfo;
        const { errMsg } =this.state
        return (
            <form onSubmit={this.handleSubmit}>
                {/*用户名*/}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                           className={classnames("form-control",{"is-invalid":errMsg[0] === 'username'})}
                           id="username"
                           name='username'
                           defaultValue={username}
                           onChange={this.handleChange}
                    />
                    <small  className="form-text text-muted">
                        { errMsg[0] === 'username' && errMsg[1] }
                    </small>
                </div>
                {/*邮箱地址*/}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                           className={classnames("form-control",{"is-invalid":errMsg[0] === 'email'})}
                           id="email"
                           name="email"
                           aria-describedby="emailHelp"
                           defaultValue={email}
                           onChange={this.handleChange}
                    />
                    <small  className="form-text text-muted">
                        { errMsg[0] === 'email' && errMsg[1] }
                    </small>
                </div>
                {/*密码*/}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           className={classnames("form-control",{"is-invalid":errMsg[0] === 'password'})}
                           id="password"
                           name="password"
                           defaultValue={password}
                           onChange={this.handleChange}
                           autoComplete="true"
                    />
                    <small  className="form-text text-muted">
                        { errMsg[0] === 'password' && errMsg[1] }
                    </small>
                </div>
                {/*确认密码*/}
                <div className="form-group">
                    <label htmlFor="confirmPassword">ConfirmPassword</label>
                    <input type="password"
                           className={classnames("form-control",{"is-invalid":errMsg[0] === 'confirmPassword'})}
                           defaultValue={confirmPassword}
                           id="confirmPassword"
                           name="confirmPassword"
                           onChange={this.handleChange}
                           autoComplete="true"
                    />
                    <small  className="form-text text-muted">
                        { errMsg[0] === 'confirmPassword' && errMsg[1] }
                    </small>
                </div>

                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
        )
    }
}

export default withRouter(RegisterForm);