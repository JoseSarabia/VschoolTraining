const form = document["my-form"]

form.addEventListner("submit", function(event){
    event.preventDefault()
    const firstName = form.firstName.value
    form.firstName.value = ""

    const lastName = form.lastName.value
    form.lastName.value = ""

    const h1 = document.createElement('h1')

    h1.textContent =firstName + " " + lastName

    document.getElementsByTagName("body")[0].append(h1)


})