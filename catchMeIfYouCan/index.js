//  function sum(x, y){
//     //check data types first and throw error
    
//     if (typeof x == "number" && typeof y == "number") {
//        return x + y;
//     } else {
//         console.log("One of the arguments is not of the data type number.");	
//     }
// }
  
// try {
//     sum("1",2);
// }  catch (error) {
//     console.error(error);
// }

 function login(username, password) {
	if (username == "username" && password == "password") {
    	console.log("Login Successful!");
    } else {
      	// Error Message
    	console.log("Username and Password Do Not Match");
    }
} 


// // function login(username, password){
// //     //check credentials
// //   }
  
  //First instance using correct credentials
//   try {
//     login("sam", "123abc");
//   } catch (error) {
//     console.error(error);
//   }
//   try {
//     login("123abc", "sam");
//   } catch (error) {
//     console.error(error);
//   }
