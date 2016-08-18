'use strict'
let over = function(index){
	return {
		type:'MOUSER_OVER',
		payload:index
	}
}
let leave = function(){
	return {
		type:'MOUSER_LEAVE',
		payload:''
	}
}
exports.over=over;
exports.leave=leave;