
// get header element
var headerElement = document.getElementById("header")
console.log(headerElement)
headerElement.textContent =" JavaScript Made This!!"

// get div element w/ id of box
var box = document.getElementById("box1")
console.log(box)

// create h1 element
var h1Element = document.createElement("h1")
console.log(h1Element)

h1Element.textContent = "This is a box"

// append <h1> tag to the box <div> element: 
// <div id="box">Hello
//      <h1>This is a box</h1>
// </div>
// appendChild method 
box.appendChild(h1Element)

document.getElementById("clear-button").addEventListener("click",function(){
    alert("helloWOrld")
});
