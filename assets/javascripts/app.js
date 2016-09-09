var calcButtons = document.getElementsByClassName('calc_button');
var operators = document.getElementsByClassName('operator');
console.log(operators)
var num1 = null
var num2 = null
var operation = null

var output = document.getElementById('output');

for(var i = 0; i < calcButtons.length; i++) {
	var button = calcButtons[i];
	button.addEventListener('click', function(event) {
		output.innerText += event.target.innerHTML
	})
}

for(var i = 0; i < operators.length; i++) {
	var operator = operators[i];
	operator.addEventListener('click', function(event) {
		if(num1 === null) {
			num1 = output.innerHTML;
			operation = event.target.innerHTML
			output.innerHTML = ''
		} else {
			num2 = output.innerHTML
			output.innerHTML = ''
			num1 = setOperator(operation, num1, num2)
		}
	})
}

var equals = document.getElementById('equal_symbol')

equals.addEventListener('click', function() {
	num2 = output.innerHTML.substring(1, output.innerHTML.length - 1);
	output.innerHTML = setOperator(operation, num1, num2);
	console.log(num1);
	console.log(operation);
	console.log(num2);

})

var clear = document.getElementById('clear')

clear.addEventListener('click', function() {
	num1 = null;
	num2 = null;
	operation = null;
	output.innerHTML = '';
})

function multiply(num1, num2) {
	console.log('multiply')
	return Number(num1) * Number(num2);
}

function divide(num1, num2) {
		console.log('divide')
	return Number(num1) / Number(num2);
}

function add(num1, num2) {
		console.log('add')
	return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
		console.log('subtract')
	return Number(num1) - Number(num2);
}

function setOperator(operator, num1, num2) {
	switch(operator) {
	case '*':
		return multiply(num1, num2);
		break;
	case '/':
		return divide(num1, num2);
		break;
	case '-':
		return subtract(num1, num2);
		break;
	case '+':
		return add(num1, num2);
		break;
	}

}