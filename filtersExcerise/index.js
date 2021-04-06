// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// const numbers = [3, 6, 8, 2];

// const oddNumbers = numbers.filter(function (number) {
//      return number > 5;
//    })

//    console.log(oddNumbers)





  //2) Given an array of numbers, return a new array that only includes the even numbers.
  //const arr = [3, 6, 8, 2]
 // const userresults = arr.filter(function(num){

   // if(num % 2 === 0){
        //return true
  //  }
  //})

    //console.log(userresults)


    // function fiveCharactersOrFewerOnly(arr) {
    //   // your code here
    // }
    // // test
    // console.log(fiveCharactersOrFewerOnly
 
 
 
    // 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
      
      // const fiveLetters = ["dog", "wolf", "by", "family", "eaten", "camping"]

      // function fiveChar(fiveLetters) {
      //   return fiveLetters.filter(function(fiveLetters) { 
      //     return fiveLetters.length < 6;
      //   })
      //   }
      // console.log(fiveChar(['dog' , 'wolf', 'by', 'family', 'eaten', 'camping']));



    //4 Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

  // const teams = [
  //     { name: "Angelina Jolie", member: true },
  //     { name: "Eric Jones", member: false },
  //     { name: "Paris Hilton", member: true },
  //     { name: "Kayne West", member: false },
  //     { name: "Bob Ziroll", member: true }   ]


  //     const people = teams.filter(function(team){
  //       return team.member === false
  //     })

  //     console.log(people);



//   5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)



    //   const viewers = [
    //     { name: "Angelina Jolie", age: 80 },
    //     { name: "Eric Jones", age: 2 },
    //     { name: "Paris Hilton", age: 5 },
    //     { name: "Kayne West", age: 16 },
    //     { name: "Bob Ziroll", age: 100 }
    // ]

    // const  ofAgeToSeeMatrix = viewers.filter(function(viewer){
    //   return viewer.age >= 18
    // })

    // console.log(ofAgeToSeeMatrix)




    //reduce

    // const name = ['danny', "Mike", "jose", "joker"]

    // const numbers = [1, 2, 3, 4]

    // const firstLast = names.map(function(name){
    //    return name + "" + Doe
    // })

    
    //  console.log( )



// const voters = [

// {name:'Bob' , age: 30, voted: true},
// {name:'Jake' , age: 32, voted: true},
// {name:'Kate' , age: 25, voted: false},
// {name:'Sam' , age: 20, voted: false},
// {name:'Phil' , age: 21, voted: true},
// {name:'Ed' , age:55, voted:true},
// {name:'Tami' , age: 54, voted:true},
// {name: 'Mary', age: 31, voted: false},
// {name: 'Becky', age: 43, voted: false},
// {name: 'Joey', age: 41, voted: true},
// {name: 'Jeff', age: 30, voted: true},
// {name: 'Zack', age: 19, voted: false}

// ]

// const totalCount = voters.reduce(function(count, voter){
//    if (!voter.voted){
//     count += 1
//    }  return count
//    //console.log(voter)
// },0)

//   console.log(totalCount)
  
//   const voterName = voters.reduce(function(trueName, voter){
//      if (voter.voted) {
//        trueName.push(voter.name)
       
//      }

//      return trueName
//   },[])
//    console.log(voterName)

//6) Given an array of potential voters, return an object representing the results of the vote
//Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object 
//containing this data should have 6 properties. See the example output at the bottom.


var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

const voterResults = voters.reduce(function(final, voter){

  if (voter.age <= 25) {
    final.age <=
    final.ages18to25++
    if (voter.voted === true){
      final.ages18to25Voted ++
    }
  }
})

{ages18to25: 0, ages18to25Voted; 0} 

console.log(voteResults)