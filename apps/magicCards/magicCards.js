function setup() {
	document.getElementById('questions').style.display = 'block';
}
var array = new Array(0);
var it = 0;
var correct = 0;
function reset() {
	var p = document.getElementById('questions').children[0].children[0];
	document.getElementById('questions').style.display = 'none';
	p.textContent = "Is your number in card 1?";
	p.id = '1';
	array.length = 0;
	document.getElementById('aftertext').textContent = '';
	document.getElementById('reset').textContent = '';
	document.getElementById('yes').style.display = 'none';
	document.getElementById('no').style.display = 'none';
	document.getElementById('was i correct').style.display = 'none';
	p.nextElementSibling.checked = false;
	p.nextElementSibling.nextElementSibling.checked = false;
	var num = 'card'+(it).toString();
	console.log(num);
	document.getElementById(num).style.display = 'none';
	document.getElementById('card1').style.display = 'block';
	it = 0;
}


function f() {
	it++;
	var p = document.getElementById('questions').children[0].children[0];
	var ifchecked = p.parentElement.children[1].checked;
	if (ifchecked) {
		array.push(Number(p.id));
	}
	if (it < 7) {
		$("#questionChanger").fadeOut(700, function(){
			var num = Number(p.id)+1;
			num = num.toString();
			p.textContent = "Is your number in card "+num+"?";
			p.id = num.toString();
			p.parentElement.children[1].checked = false;
			p.parentElement.children[3].checked = false;
			num = 'card'+it.toString();
			document.getElementById(num).style.display = 'none';
			num = 'card'+(it+1).toString();
			document.getElementById(num).style.display = 'block';
		});
		$("#questionChanger").fadeIn(700);
	} else {
		findNum(array);
	}
}
function add() {
	correct++;
	callit();
}
function callit() {
	document.getElementById('correct').textContent = 'Number of times I guessed your number correctly: ' + correct;
	reset();
}
function findNum(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += 2**(array[i]-1);
	}
	document.getElementById('aftertext').textContent = "Your number is: " + sum;
	document.getElementById('reset').textContent = "Press reset to play again.";
	document.getElementById('yes').style.display = 'block';
	document.getElementById('no').style.display = 'block';
	document.getElementById('was i correct').style.display = 'block';
	array.length = 0;
	return sum;
}