'use strict'
let setCookie = function(name, value, iDay ,domain) {
    if (iDay) {
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + iDay)
        document.cookie = name + '=' + value + ';expries=' + oDate.toGMTString() + ';path=/; domain='+domain;
    } else {
        document.cookie = name + '=' + value + ';path=/; domain='+domain;
    }
};
let getCookie = function(name) {
    var cookies = document.cookie;
    var arr = cookies.split('; ');
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=');
        if (arr2[0] == name) {
            return arr2[1]
        }
    }
    return ''
};
let removeCookie = function(name,domain) {
    setCookie(name, 1, -1,domain)
};
export default function(){
	return {
		type:'JIA_CITY',
		city:getCookie('jia_city_id')
	}
}