import React from 'react';
import ReactDOM from 'react-dom';

//Browser Router
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes.js'

// REDUX
import {Provider} from 'react-redux'
import  {createStore, applyMiddleware}  from    'redux'
import  promiseMiddleware   from    'redux-promise'
import ReduxThunk from 'redux-thunk'

// REDUCERS
import Reducers from './Reducers'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(

<Provider store={createStoreWithMiddleware(Reducers)}>
    <BrowserRouter>
        <Routes> </Routes>
    </BrowserRouter>
</Provider>

, document.getElementById('root'));


