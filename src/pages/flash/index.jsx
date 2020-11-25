import React ,{ Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FlashItem from "./flashItem";
import { actionCreators as flashActionCreator } from './store'


class Flash extends React.Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.flashData.map( item => <FlashItem key={item.id} {...item } { ...this.props } />)
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state =>{
    return {
        flashData:state.flash
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        flashFn:bindActionCreators(flashActionCreator,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Flash);