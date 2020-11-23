import React from 'react';
import {Layout} from "antd";
import {BrowserRouter as Router,Route,BrowserHistory,Redirect} from 'react-router-dom'
import { createBrowserHistory } from "history";


import './layoutStyle.css';
import Login from "../components/login/login";
import Test from "../test";
import Register from "../components/register/register";

const history = createBrowserHistory();

class MyLayout extends React.Component {
    render() {
        const {handleClick,loggedIn}=this.props
        return (
            <Router history={history}>
                <Layout>
                    <Route path='/'>
                        {loggedIn ?  <Redirect to="/home" />: <Redirect to="/login" />}
                    </Route>
                    <Route path="/login" >
                        <Login handleClick={handleClick} />
                    </Route>
                    <Route path="/home/" >
                        <Test  handleClick={handleClick}/>
                    </Route>
                    <Route path="/register" >
                        <Register />
                    </Route>
                </Layout>


            </Router>

        )
    }
}

export default MyLayout;