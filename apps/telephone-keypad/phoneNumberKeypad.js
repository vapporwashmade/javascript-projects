var words = require('./english-words.js');
var map = {
	'2':'a,b,c',
	'3':'d,e,f',
	'4':'g,h,i',
	'5':'j,k,l',
	'6':'m,n,o',
	'7':'p,q,r,s',
	'8':'t,u,v',
	'9':'w,x,y,z'
};
var phonenumber = '9675464';

// this function takes in a string and an object and returns an array of the possibilities
// that the string could be mapped to in the object
function telephoneMap(str, obj) {
	var x = obj[str.charAt(str.length-1)];
	if (!x) {
		return [];
	} else {
		x = x.split(',');
	}
	if (str.length === 1) {
		return x;
	}
	var previous = telephoneMap(str.slice(0, -1), obj);
	var next = [];
	for (var i = 0; i < previous.length; i++) {
		for (var j = 0; j < x.length; j++) {
			next.push(previous[i]+x[j]);
		}
	}
	return next;
}
var p = telephoneMap(phonenumber, map);
for (var i = 0; i < p.length; i++) {
	if (words.includes(p[i])) {
		console.log('The phone mnemonic: 1-800-' + p[i] + ' with number ' + phonenumber);
	}
}