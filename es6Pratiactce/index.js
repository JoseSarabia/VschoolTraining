// let and const
// Replace all the vars with let and const. Alter the code
//  however necessary to make sure this continues to work (so the pet's name isn't "John", 
//  but instead "spot" is returned). You only need to delete var and insert let and const

// John is the pet owner, and his name should be stored differently than the other names.


// const name = "John"
// let age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])




// Task 2                     Done
// Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the => it 
//     will think it's starting a function, and not starting an 
//     object, so the : will be an unexpected symbol.

 // const carrots = ["bright orange", "ripe", "rotten"]
     
//  carrots.map((carrot) => {
//      return carrot.length
//  });
    
     
//      console.log(carrots)


// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//          return { type: "carrot", name: carrot }
//      })
//  }

 //console.log(carrots)



 //function mapVegetables(arr) {
    //return arr.map (carrot => ({ type: "carrot", name: carrot }))
  //}
  //console.log(mapVegetables(carrots))






             
//Task 2                    Done
//Re-write this .filter() using an arrow function:

// const peoples = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const funnyPeoples = peoples.filter(people => people.friendly === true) 
// console.log(funnyPeoples)


//Task 3             DONE
// Re-write the following functions to be arrow functions:

//let add = (x, y)  => x + y;
//console.log(add(10,20))

//let produceProduct = (a, b) => a * b
    // console.log(produceProduct(10 , 20))





//console.log(sum)


//var produceProduct = function(a, b) {
    //return a * b
//}


   //Task 4
   //Write a printString function that takes firstName, lastName, 
  // and age as parameters and returns a string like the following:
    
  // const peoples = 
  // [{fristName: "Jane"},
  //  {lastName: "Doe"}, 
  //  {age :"100"}]

  //  function printString(people ){
  //               console.log("Hi"+" "+people[0].fristName, people[1].lastName +" " + "how does it feel to be" + " " +people[2].age)
  //  }
  //   console.log (printString(peoples))
    //Hi Kat Stark, how does it feel to be 40











//  const peoples = 

//  [{fristName: "Jane"},
//   {lastName: "Doe"}, 
//   {age :"100"}]

//   function printString(fristName, lastName, age ){
//                console.log(fristName, lastName, age)
//   }
   
//    console.log (printString(peoples[0], peoples[1], peoples[2]    ))

  //console.log(results)

  //Task 5
  //Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
  
  // const animals = [
  //    {
  //        type: "dog",
  //        name: "theodore"
  //    },
  //    {
  //        type: "cat",
  //        name: "whiskers"
  //    },
  //    {
  //        type: "pig",
  //        name: "piglette"
  //    },
  //    {
  //        type: "dog",
  //        name: "sparky"
  //    }
  // ];
  
  //  const filterForDogs = animals.filter(animal => animal.type === "dog")
       
  //  console.log(filterForDogs)