import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux' 
import { Provider } from 'react-redux'
import RouterConfig from './pages/routers'
import rootReducers from './reducers/index'
import './index.scss'

let store = createStore(rootReducers)

ReactDOM.render(
    <Provider store={store}>
        <RouterConfig />
    </Provider>,
    document.getElementById('root')
);
