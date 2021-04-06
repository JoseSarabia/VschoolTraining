

function formSubmit(e){
    e.preventDefault()
const form = document.getElementById("travelLog")

const firstName = form.elements["firstName"].value
const lastName = form.elements["lastName"].value
const age = form.elements["age"].value
const male = form.elements["male"].checked
const female = form.elements["female"].value
const kosher = form.elements["kosher"].value
const vegan = form.elements["vegan"].checked
const lactosFree = form.elements["lactosFree"].checked
const location = form.elements["city"].checked


alert("First Name: "+ firstName + "\nlast Name: "+ lastName  +  "\nage :" + age
+ "\nkosher :" + kosher + "\nlocation: " + location)
}
