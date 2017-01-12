function hello(){
	console.log("Hello world")
}

hello();


// console.log("hello world") ctrl / comment all
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
//RETURN IS USABLE INFO --INSIDE THE {} 
function greeting(name){
	return "Hello " + name;
}
var addgreeting = greeting("Paul") + ", how are you doing today";

function printNumber(){
	console.log(1);
}

printNumber();

 function sumNum( num1, num2){
	
	return num2 + num1;
	
	
}

function calculatePriceIndiana(quantity, price){
		var tax = 0.07;
		var totaltax = quantity * price * tax;
		var totalPrice = totaltax + quantity * price;

		return totalPrice;
}
function subNum(num1, num2){
	console.log (num1 - num2)
}

function mulNum(num1, num2){
	
	return (num1 * num2);
}

function divNum(x, y){
	
	console.log(x / y);
}



//console.log(num); wont work because it is calling var inside of function- not a global var

sumNum(1, 4);
subNum(1, 4);
console.log(mulNum(7, 4))
divNum(20,4);

function checkOdd(num) {
	if (num % 2 === 0){
		return "Yo dawg, this is even"
	}else {
		return "nah dawg"+ "it's odd"
	}
}
console.log(checkOdd(13))

function divbythree(num) {
	if (num % 3 === 0){
		return "Yo dawg, this is divbythree"
	}else {
		return "nah dawg"+ "it's odd"
	}
}
console.log(divbythree(21))

function twoStrings(edgar, allen) {
	return edgar + " " + allen
	// body...
}
console.log(twoStrings("nevermor", "nevermore"))
