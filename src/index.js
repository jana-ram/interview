import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import { Router , BrowserRouter } from 'react-router-dom';
import { logger } from 'redux-logger';
import reducers from './reducers';
import { createBrowserHistory } from 'history';
const store = createStore(reducers, applyMiddleware(thunk,logger));
const history = createBrowserHistory();
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>            
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);