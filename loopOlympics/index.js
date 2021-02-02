
//Write a for loop that prints to the console the numbers 0 through 9.
//for(var i = 0; i <=9; i++) {
 //   console.log(i)
//}

//for(var i = 9; i <= 0; i++){
 ///   console.log(i)
//}

//Write a for loop that prints to the console 9 through 0.
 //var arr=[1, 2, 3, 4, 5, 6];
// for(var i = arr.length -1; i >= 0; i--){
 //    console.log(arr[i]);
 //}
  //Write a for loop that prints these fruits to the console.
 //var fruit = ["banna", "orange", "apple", "kiwi"]
   //for(var i = 0; i < fruit.length; i++){
    //   console.log(fruit[i])
   //}

  // Write a for loop that prints to the console only even numbers 0 through 100.

  
   
  
  
  
  
  var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
  var newArr = []
  for(var i = 0; i < fruit.length; i++){
    if(i % 2 !==0){
      newArr.push(fruit[i])
    }
  }
 console.log(newArr)

 //var veggies = ["carrot", "broccoli", "asparagus", "lettuce", "brussel sprouts", "potato"]
 //var newArr = []
 //for(var i = 0; i < veggies.length; i++) {
   // if(i % 2 !== 0) {
    //   newArr.push(veggies[i])
   // }
 //}
 //console.log(newArr) // console logs ["broccoli", "lettuce", "potato"]