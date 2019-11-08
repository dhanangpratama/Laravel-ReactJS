import React, { Component } from 'react';
import { connect } from "react-redux";
class About extends Component {
    constructor () {
        super()
    
    }

    render () {
    
        return (
            <div className='container py-4'>
            <div className='row justify-content-center'>
                <div className='col-md-12'>
                    About
                </div>
            </div>
            </div>
        )
    }
}

const mapReduxStateToComponentProps = state => ({
    app: state.app
});

export default connect(
    mapReduxStateToComponentProps, 
    null
)(About);