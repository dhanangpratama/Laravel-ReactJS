import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Routes from './Routes';

class Main extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Route component={Routes} />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('app'))