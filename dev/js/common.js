'use strict'
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , combineReducers , compose , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Nav from './components/nav';

import AllReducer from './reducers/index';


var oDiv = document.createElement('div');
	oDiv.id='root';
	document.body.appendChild(oDiv);
var oRoot = document.getElementById('root');

let enhancer = compose(
	applyMiddleware(
		thunk
	),
	window.devToolsExtension && window.devToolsExtension() //: f => f//devTools.instrument()
);


let store = createStore(AllReducer,{},enhancer );

ReactDOM.render(
	<Provider store={store}>
		<Nav />
	</Provider>,
	oRoot
)