
 // sending a http request.  line 4 is declaring a fucntion that will be called in the future. whe the request opens
    const request = new XMLHttpRequest()
    request.onload = function(e){
    
        const data = JSON.parse(request.response)
        const allPokemon = data.objects[0].pokemon
          //forloop
        for(let i = 0; i < allPokemon.length; i ++ ){
                const pokemon = allPokemon[i]
            const el = document.createElement("h1") 
            const text = document.createTextNode(pokemon.name)
            el.appendChild(text)
                const parent = document.getElementById("data")
                document.body.insertBefore(el, parent)
        }
        

    }
//     request.addEventListener("load",log)
//     function log(data) {
// console.log(data)

//     }
    request.open("GET", "https://api.vschool.io/pokemon")
    request.send()

