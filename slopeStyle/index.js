

// 1 Use the Rest Operator to help this function return an array of animals,
//no matter how many animals are passed to it:

//    const  theAnimals = ["dog", "cat", "mouse", "jackolope", "platypus"]

//   function collectAnimals(...animals) {  
//     return animals 
//  }

//    console.log(theAnimals);


// task 2 
// Write a function that returns
//  a food object with the array names as properties using Object Literals:


// function combineFruit(fruit, sweets, vegetables){
//     return {}
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])
// //=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }






//3 Use destructuring to use the property names as variables. Desructure the object in the parameter:

//  const vacation = {  
//    location: "Burly Idaho",
//    duration: "2 weeks"
//  };

// function parseSentence({location, duration}){
//   return `We're going to have a good time in ${location} for ${duration}`;
//  }
//  console.log(parseSentence(vacation));





/////    4  

//Write destructuring code to assign variables that will 
//help us return the expected string. Also, change the string to be using Template literals:
//ask how to seraperte words  in console.log


// const favoriteActivities = {
//   firstFav: "magnets",
//   secondFav: "snowboarding",
//   thirdFav: "philanthropy",
//   fourthFav: "janitor work",
//   fithFav: "eating"
// };

// function favThingsToDo({firstFav, secondFav, thirdFav}) {
//   console.log(('My top three favorite activities are'  + firstFav + ',' + secondFav + ',' + thirdFav));
// }
// favThingsToDo(favoriteActivities);


// task 5
//Use the Rest and Spread Operator to help take any number
 //of arrays, and return one array. You will need to change how the 
 //arrays are passed in. You may write it assuming you will always recieve 
 //three arrays if you would like to.

//const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];


// function combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals) {  
//   newCombinedArrName = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals];
//   return newCombinedArrName;
// }

// newCombinedArrName = combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)
// console.log(newCombinedArrName);

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

//combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]
    


// Task 6  need to complete

// TTry to make the following function more ES6xy:
//const product = (a, b, c, d , e) => {

   //const product = (...num) => {
  // let numbers = [...num];
    
  // return numbers.reduce((acc, number) => acc * number , 1 )
 //}
 //console.log(product(3,2))







  // function product(a, b, c, d, e) {  
  // const numbers = [a,b,c,d,e];


//   return numbers.reduce(function(acc, number) {
//     return acc * number;
     
//   }, 1)
  
// }  console.log(product)
 
// Task 7
//Make the following function more ES6xy. Use at least both the rest and spread operators:

 //function unshift(array, a, b, c, d, e) {  
 //  return [a, b, c, d, e, ...array];
  
//}

// function unshift(...array , a, b , c, d, e) {
  // return [a, b, c, d, e, array] ;
// }
// task 8 
// Write some destructuring code to help
//  this function out. Use object literals to simplify it:
//  const peoples = [{
//    firstName : firstName,
//    LastName : lastName}
//  ]


//  populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
// [

// function populatePeople(names){
//   return names.map(function(name){
//       name = name.split(" ");
     
//       }
//   })
// }

//populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]










// question 8

// Write some destructuring code to help this function out. Use object literals to simplify it:

// function splitName(name) {
//   name = name.split("");
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }
//     function populatePeople(names) {
//       return names.map(splitName(name));
//     }
// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])



function populatePeople(names){
  return names.map(function(name){
      name = name.split(" ");

      let firstName = name[0];
      let lastName = name[1];
    
      return {
          firstName: firstName,
          lastName: lastName
      }
  })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]);
