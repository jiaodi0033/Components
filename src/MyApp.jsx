import React from 'react'
import { Layout } from "antd";

import { BrowserRouter as Router,Switch,Route  } from "react-router-dom";

import  Home from './pages/home';
import Register from "./pages/register";
import Login from "./pages/login";
import Navigator from "./pages/navigator";
import './myApp.css'
import Flash from "./pages/flash/index";

class MyApp extends React.Component {
    handleClick = () =>{
        console.log('script start');

        setTimeout(function() {
            console.log('timeout1');
        }, 10);

        new Promise(resolve => {
            console.log('promise1');
            resolve();
            setTimeout(() => console.log('timeout2'), 5);
        }).then(function() {
            console.log('then1')
        })

        console.log('script end');
    }
    render() {
        return (
            <Layout>
                <Router>
                    <button onClick={this.handleClick}>点击</button>
                    <Navigator/>
                    <Flash />
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/home"  component={Home}/>
                        <Route path="/register"  component={Register}/>
                        <Route path="/login"  component={Login}/>
                    </Switch>

                </Router>
            </Layout>

        )
    }
}

export default MyApp;