//get the todolist from the database
function getList(){

axios.get("https://api.vschool.io/josesarabia12/todo")
.then(response => buildList(response.data))
.catch(error => console.log(error))
}
getList()
// builds the todolist with javascript with data from database
function buildList(data){
    let container = document.getElementById("list")
    container.innerHTML= ""
    if (data.length > 0){
        data.forEach((item,index) => {
           
            let row = document.createElement("div");
            
            row.classList.add("row");
            row.classList.add(`${item.completed?"completed":"incomplete"}`)
            container.appendChild(row)
            //creating html elements and making them var
            let title = document.createElement("div")
            let price = document.createElement("div")
            let description = document.createElement("div")
            let image = document.createElement("img")
            let buttonGroup = document.createElement("div")
            let deleteButton = document.createElement("button")
            let completeContainer = document.createElement("div")
            let completeInput = document.createElement("input")
            let completeLabel = document.createElement("label")
            
            
            completeInput.type="checkbox"
            completeContainer.appendChild(completeInput)
            completeContainer.appendChild(completeLabel)
           // this is the checkbox
            completeLabel.innerText = "complete"
            completeInput.addEventListener("change", function(){
                axios.put(`https://api.vschool.io/josesarabia12/todo/${item._id}`, {
                    completed: this.checked
                // this is to rebuild list
                }).then(response => getList())
            })
            completeInput.checked = item.completed
            title.innerHTML = item.title
            price.innerHTML = item.price
            description.innerHTML = item.description
            image.src = item.imgUrl
            deleteButton.innerHTML = "&#128465;"
            deleteButton.addEventListener("click",e =>{
                // call event line 38
                axios.delete(`https://api.vschool.io/josesarabia12/todo/${item._id}`)
                .then(response => getList())
            }) 
            // add html elements to the assigned containers
            buttonGroup.appendChild(deleteButton)
            row.appendChild(completeContainer)
            row.appendChild(title)
            row.appendChild(price)
            row.appendChild(description)
            row.appendChild(image)

            row.appendChild(buttonGroup)
        })

    }
}
    // take information from the form and send it to the data base
function handleSubmit(e){
    e.preventDefault()
    console.log(e.target.elements)
    let object = {
        title: e.target.elements.title.value,
        price: e.target.elements.price.value,
        description: e.target.elements.description.value,
        imgUrl: e.target.elements.imgUrl.value
    }
    //. then refreahes the list and clears out the form
        axios.post("https://api.vschool.io/josesarabia12/todo", object)
        .then(response=> {
            getList();
            e.target.elements.title.value="";
            e.target.elements.price.value="";
            e.target.elements.description.value="";
            e.target.elements.imgUrl.value="";
        })
        .catch(error=> console.log(error))

}
    // function handleChange(e){
    //     let object = {
            
    //         title: e.target.elements.title.value,
    //         price: e.target.elements.price.value,
    //         description: e.target.elements.description.value,
    //         imgUrl: e.target.elements.imgUrl.value


    //     }
        
    // }

    