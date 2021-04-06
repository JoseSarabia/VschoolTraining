


// Make an array of numbers that are doubles of the first array
//const doubleNumbers= [2,5,100].map((x) => x * 2);
//console.log(doubleNumbers)


//2) Take an array of numbers and make them strings

//const stringItUp = [2,5,100]
////
// 3) Capitalize each of an array of names
// 

// const items = ["john", "jacob", "jingleheimer", "schmidt"];

// const capitalNames = items.map( item => item.toUpperCase());

//     console.log(capitalNames);




 const richPeoples = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true } ]

    const veryRich = richPeoples.filter(richPeople => richPeople.member === "true")

    console.log(veryRich)
    
    
    
    // const veryRich = richPeoples.filter(function(richpeople){
    //     if (richpeople.name === "member"){
    //         return true
    //     }
    // })

    // console.log(veryRich)







 

 



 //4) Make an array of strings of the names
//
const items =[
{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}]


const itemNames = items.map((item) => {

      return item.name

})

console.log(itemNames)


// const items = [
// {
//     name: "Angelina Jolie",
//     age: 80
// },
// {
//     name: "Eric Jones",
//     age: 2
// },
// {
//     name: "Paris Hilton",
//     age: 5
// },
// {
//     name: "Kayne West",
//     age: 16
// },
// {
//     name: "Bob Ziroll",
//     age: 100
// }];


// const itemNames = items.map(function(item) {

//       return item.name.toUpperCase();
    
//  });
    
//  console.log(itemNames)






//const peopleNames = peoples.map(people => people.toUpperCase());

 //console.log(peopleNames);

//  const names = ['Ali', 'Atta', 'Alex', 'John'];

//  const lowercased = names.map(name => name.toLowerCase());

// console.log(lowercased);