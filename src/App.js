import React from 'react'

import 'antd/dist/antd.css';
import './App.css'

import MyLayout from "./layout/layout";

localStorage.setItem("loggedIn",JSON.parse(localStorage.getItem('loggedIn')))
class App extends React.Component {
  state={
    loggedIn:JSON.parse(localStorage.getItem('loggedIn'))
  }

  handleClick=()=>{
    const {loggedIn}=this.state
    localStorage.setItem("loggedIn",!loggedIn)
    this.setState({loggedIn:!loggedIn})
  }
  render() {
    return (
        <MyLayout handleClick={this.handleClick} loggedIn={this.state.loggedIn} />
    );
  }

}

export default App;
