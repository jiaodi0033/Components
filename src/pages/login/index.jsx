import React from 'react'

class Login extends React.Component {
    state={
        username:'',
        password:''
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);

    };
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value 
        })
    }

    render() {
        const  { username,password } = this.state
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

export default Login;