//using For loop

var movies=[{
   title:"godfather",
   year:1972,
   genre:"drama"
},
{
   title:"Suicide Squad",
   year:2021,
   genre:"action"
},
{
   title:"antman",
   year:2019,
   genre:"action,comedy"
}
]
for (var i = 0; i <movies.length;i++)
 {
  console.log(movies[i].title)  // returns the godfather Suicide Squad antman
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
    console.log(number+1);//returns 2 3 4 5 6
});