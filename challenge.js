// EASY(1)
/*Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.*/

let myEven = [];
let myOdd = [];

let x = 0;

for (var j = 0; j <= x; j++ ) {
        y = (j % 2); // if 0 even, if remainder 1 odd
        if (y == 0) {
                myEven.push(j);
        }else{
                myOdd.push(j);
        }
}

myEven.splice(0, 1); // remove 0 (0/2 = 0)

console.log("Even numbers: " + myEven.j);
console.table("Odd numbers: " + myOdd.j);


//EASY(2)
/*Create a function that checks an array for prime numbers then inserts any pimes into a new array.*/

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray);


// MEDIUM(1)
/* Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input
is a vowel.*/

function vowelChecker(x){
        var vowels = x.toLowerCase();

         if (vowels  === "a" || vowels  === "e" || vowels === "i" || vowels === "o" || vowels === "u") {
            console.log(" the  letter is a vowel!");
         }else {
          console.log(" letter is a NOT a vowel.");
         }
return vowels;
}
console.log(vowelChecker("a"));


// MEDIUM(2)
/* Create a function that accepts two strings, then determines whether or not the first string is an anagram of the
second string by returning a boolean.*/

function compare(str, ana){

        var ana1 = str.replace(/[^\w]/g, '').toLowerCase();
        var ana2 = ana.replace(/[^\w]/g, '').toLowerCase();
        if(sortStrings(ana1) === sortStrings(ana2)){
                console.log('Is an anagram');
        }else{
                console.log('Is not an anagram');
        }

}
function sortStrings(str){
        console.log(str.split('').sort().join());

}
compare('listen', 'silent');


//MEDIUM(3)
/*Write a function that takes in two numbers and determines the largest positive integer that divides the two
numbers without a remainder.*/

function math(x, y){
        let total = x / y;
        let result;
        if (x % y === 0){
                result = total;
        }else{
                result = "Error: Remainder found";
        }
        return result;
 }
 console.log(math(20, 5));


//Medium(4)
/*Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object;
A driveToWorkmethod, driveAroundTheWorldmethod, and runErrandsmethod. Each of these methods
should affect the car’s mileage adding to it each time and console logging the old mileage and the new
mileage.*/

let car = {
                make: 'Honda',
                model: 'CR-V',
                year: 2003,
                milage: 15161,
                color: 'silver',
        
                driveToWork: function() {
                        console.log(this.milage + 10) ;
                    },
                driveAroundTheWorld: function() {
                        console.log(this.milage * 3)
                    },
                runErrands: function() {
                        console.log(this.milage + 50)
                    }
                
        };
                
        car.driveToWork();
        car.driveAroundTheWorld();
        car.runErrands();


//Hard(1)
/*Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of
matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value*/

function areBracketsBalanced(expr){
	
	let stack = [];

	for(let i = 0; i < expr.length; i++)
	{
		let x = expr[i];

		if (x == '(' || x == '[' || x == '{')
		{
			
			// Push the element in the stack
			stack.push(x);
			continue;
		}

		if (stack.length == 0)
			return false;
			
		let check;
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;

		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;

		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}

	// Check Empty Stack
	return (stack.length == 0);
}

let expr = "{function()array[]}";

if (areBracketsBalanced(expr)){
	console.log("Balanced ");
}else{
	console.log("Not Balanced ");
}
