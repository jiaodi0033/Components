import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../login/store/actionCreators'

class Logout extends React.Component {
    render() {
        return (
            <div>
               <button className="btn btn-primary btn-lg" onClick={this.props.logout}>退出</button>
            </div>
        )
    }
}

export default connect(null,{ logout })(Logout);