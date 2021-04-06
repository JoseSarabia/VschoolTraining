const pressClick = document.getElementById("clickMe")
 


pressClick.addEventListener("click", mybutton)

let count = 0;
 function mybutton(){
    count += 1;
    let myCount = document.getElementById("counter")
   myCount.textContent = ("This has been clicked:" + count)
   //localStorage.setItem(mycount,textContent,("this button has been clicked:" + count))
 }





























