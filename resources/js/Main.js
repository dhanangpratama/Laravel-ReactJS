import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Routes from './Routes';
import { Provider } from 'react-redux';
import { store, persistor } from './Store';
import { PersistGate } from 'redux-persist/integration/react';

class Main extends Component {
    render () {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <div>
                            <Header />
                            <Route component={Routes} />
                        </div>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('app'))