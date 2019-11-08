import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './Store';

class Main extends Component {
    render () {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route component={Routes} />
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('app'))