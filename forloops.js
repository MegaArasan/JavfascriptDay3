//using For loop
var numbers = [ 10, 20, 30, 40, 50] 
for (var i=0; i < numbers.length; i++) {
   console.log(numbers[i]) // returns 10 20 30 40 50
}

//using For...in loop
var person = {
    fname: "Mega",
    lname: "Arasan",
    age: 22
 }; 
 for (let x in person) {
    console.log(x + ": "+ person[x]) //returns fname: "Mega", lname: "Arasan", age: 22
 }

 //using For...of loop
 const students = ['Mega', 'Saran', 'Mano'];
for ( let element of students )
 {
    console.log(element); //returns Mega Saran Mano
}


//using Foreach 
const num = [1, 2, 3, 4, 5];
num.forEach(function(number)
 {
    console.log(number);//returns 1 2 3 4 5
});