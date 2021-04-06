
 //const mulBtn = document.getElementById("mulBtn").addEventListener("click", (mulFunc));
 
 var first_tot= 0
 
 
 function mulFunc (){
     var mFirst = document.getElementById('mFirstNumber').value;
     var mSecond = document.getElementById('mSecondNumber').value;

     first_tot += mFirst * mSecond;

     document.getElementById('total').innerHTML =   "Total: " + first_tot;

     }



     function mulFunc2() {
        var mFirst = document.getElementById('sFirstNumber').value;
        var mSecond = document.getElementById('sSecondNumber').value;
        
        tot = mFirst * mSecond + first_tot
        
        
        document.getElementById('total2').innerHTML = "Total: " + tot;
        
      }


      function clearResult() {
          first_tot = 0;
          document.getElementById('total').innerHTML = "Total: 0";
          document.getElementById('total2').innerHTML = "Total: 0";

      }
    

// const addBtn = document.getElementById("addBtn").addEventListener("click", (addFunc));

// function addFunc(){

// const sFirstNumber = parseInt(docuemnt.getElementById("sFirstNumber").value)
// const sSecondNumber = parseInt(document.getElementById("sSecondNumber").value)

// const result = (sFirstNumber + sSecondNumber)
// document.body.append(result)


// }

      


// //form.addEventListener("submit", function(){
//     event.preventDefault()
    
//     const firstName = form.firstName.value
//     const lastName = form.lastName.value
//         // clears out value
//     form.firstName.value = ""
//     form.lastName.value = ""

//     console.log(firstName + "" + lastName + "")
// //})