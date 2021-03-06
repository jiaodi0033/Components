import React from 'react'
import { Layout } from "antd";

import { BrowserRouter as Router,Switch,Route  } from "react-router-dom";

import  Home from './pages/home';
import Register from "./pages/register";
import Login from "./pages/login";
import Navigator from "./pages/navigator";
import './myApp.css'
import Flash from "./pages/flash/index";
import Personal from "./pages/personal";
import Logout from "./pages/logout";
import Auth from './utils/auth'

class MyApp extends React.Component {

    render() {
        return (
            <Layout>
                <Router>
                    <Navigator/>
                    <Flash />
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/home"  component={Home}/>
                        <Route path="/register"  component={Register}/>
                        <Route path="/login"  component={Login}/>
                        <Route path="/personal"  component={Personal}/>
                        <Route path="/logout"  component={Auth(Logout)}/>
                    </Switch>

                </Router>
            </Layout>

        )
    }
}

export default MyApp;