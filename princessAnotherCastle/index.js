const readlineSync = require('readline-sync')

let gameOver = false;


    


class Character{
    constructor(){
        this.name = "";
        this.totalCoins = 0;
        this.status = "Small";
        this.hasStar = false; 
        this.gameActive = true;
    }


    setName(namePicked) {
        this.name = namePicked
    } 

    gotHit(){
        if(this.status === "Powered Up"){
            this.status = "Big"
        }else if(this.status === "Big"){
            this.status = "Small"
        }else if(this.status === "Small"){
             this.status = "Dead"
            // this.gameActive = false
        }  
    }
    gotPowerup(){
        if(this.status === "Small"){
            this.status = "Big"
        }else if(this.status === "Big"){
            this.status = "Powered Up"
        }else if(this.status === "Powered Up"){
            this.hasStar = true
        }

    }
    addCoin(){
        this.totalCoins += 1
    }
    print(){
        console.log("Name: ", this.name)
        console.log("Status:", this.status)
        console.log("totalCoins:", this.totalCoins)
    }
    random(interval){
        const vaule = Math.floor(Math.random()* 3) 
        if(vaule === 0){
            console.log("Got Hit")
            this.gotHit()
        }else if(vaule === 1){
            console.log("Got Power Up")
            this.gotPowerup()
        }else {
            console.log("Add Coin")
            this.addCoin()
        }
        this.print()
        if(this.status === "Dead"){
            clearInterval(interval)
            console.log("Game Over")
        }
    }

    


//   timeCount = setInterval(this.gameActive, 3000)
//     setInterval(vaule){
//         if(gameActive === false){
//             clearInterval(timeCount)
//         }
//     }
        
    
}   

const hero = new Character()
hero.setName("Mario")
console.log("HERO", hero)

//const hero = new Character()
//hero.setName("Lugie")
//console.log("HERO", hero)

function repeat(){
   const interval= setInterval(()=>hero.random(interval),3000)
   
}
repeat()

// if(hero.gameActive){
//     hero.random()
// }







// hero.addCoin()
// hero.print()
// hero.gotHit()
// hero.print()
// hero.gotPowerup()
// hero.print()
// console.log(hero)










