import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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

export default About;