'use strict'
import CityReducer from  './cityReducer';
import { combineReducers } from 'redux';

let hoverReducer = function(state='',action){
	switch(action.type)
	{
		case 'MOUSER_OVER':{
			return action.payload
		}
		case 'MOUSER_LEAVE':{
			return ''
		}
		default:{
			return state
		}
	}
}
let searchHoverReducer = function(state=false,action){
	switch(action.type)
	{
		case 'SEARCH_ITEM_OVER':{
			return action.bool
		}
		case 'SEARCH_ITEM_OUT':{
			return action.bool
		}
		default:{
			return state
		}
	}
};
let zxNavReducer = function(state='',action){
	switch(action.type)
	{
		case 'ZX_NAV': {
			return action.payload
		}
		default:{
			return state
		}
	}
}
let reducers = combineReducers({
	city:CityReducer,
	zxNav:zxNavReducer,
	hoverReducer,
	searchHoverReducer
});

export default reducers;