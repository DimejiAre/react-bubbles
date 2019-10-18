import React, { useState } from "react";
import ReactDOM from "react-dom";
import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './state/reducers';
import App from "./App";

const rootReducer = combineReducers({
    colors: reducers.colorsReducer,
    loginForm: reducers.loginFormReducer,
    colorForm: reducers.colorFormReducer
})

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);
