// this function takes in a string and an object and returns an array of the possibilities
// that the string could be mapped to in the object
function generate() {
	if (isNaN(Number(document.getElementById('numdigits').value)) || Number(document.getElementById('numdigits').value) < 1) {
		document.getElementById('generated').textContent = 'Please enter a valid number!';
		return;
	}
	document.getElementById('generated').textContent = 'Generating';
	document.getElementById('generated').style = `
	<style>
        #generated {
            font-size: 20px;
        }

        #generated:after {
            overflow: hidden;
            display: inline-block;
            vertical-align: bottom;
            -webkit-animation: ellipsis steps(4,end) 900ms infinite;
            animation: ellipsis steps(4,end) 900ms infinite;
            content: "\\2026"; /* ascii code for the ellipsis character */
            width: 0;
        }

        @keyframes ellipsis {
            to {
                width: 1.25em;
            }
        }

        @-webkit-keyframes ellipsis {
            to {
                width: 1.25em;
            }
        }
    </style>
	`;
	var randNums = [];
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
	for (var i = 0; i < 100000; i++) {
		randNums.push(Math.floor(10**Number(document.getElementById('numdigits')-1) + 9 * 10**Number(document.getElementById('numdigits')-1)*9).toString());
	}
	console.log(randNums);
	for (i = 0; i < randNums.length; i++) {
		var possibilities = telephoneMap(randNums[i], map);
		for (var j = 0; j < possibilities.length; j++) {
			if (words.includes(possibilities[j])) {
				console.log('The phone mnemonic: 1-800-' + possibilities[j] + ' with number ' + randNums[i]+'!             ');
			}
		}
	}
	document.getElementById('generated').textContent = 'Generated!';
	document.getElementById('generated').style = null;
}
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
function findnumber(str) {
	document.getElementById('aftertext').textContent = '';
	var map = {
		'2' : 'a,b,c',
		'3' : 'd,e,f',
		'4' : 'g,h,i',
		'5' : 'j,k,l',
		'6' : 'm,n,o',
		'7' : 'p,q,r,s',
		'8' : 't,u,v',
		'9' : 'w,x,y,z'
	};
	var p = telephoneMap(str, map);
	var possibility = false;
	for (var i = 0; i < p.length; i ++) {
		if (words.includes(p[i])) {
			document.getElementById('aftertext').textContent += "The number " + str + " with mnemonic '" + p[i] + "'!                ";
			possibility = true;
		}
	}
	if (!possibility) {
		document.getElementById('aftertext').textContent = 'The number ' + str + ' has no possible mnemonics';
	}
}

