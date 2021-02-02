
const ask = require('readline-sync')
let playerhealth = 100;
let gameIsRunning = true;
let gameOver = false;
let inventory = [];
let demonAnimals = [];

demonAnimals.push(new Animal("panther", 30, 50, "spear"));
demonAnimals.push(new Animal("wolf", 35, 50, "knife"));
demonAnimals.push(new Animal("viper", 45, 50, "gun"));

const contender = {
    name: "",
    health: 100,
    inventory: []
}


console.log("Hello Welcome to the Jungle. Beware before entering there are demon animals that love the taste of human flesh.")
contender.name = ask.question("What is your name?:")
console.log(`Hello  ${contender.name}`)


while (!gameOver) {


    let userAnswer = ask.question("Enter 'w' to walk. Enter 'q' to quit. Enter 'p' or 'Print' to print player info  ");

    if (userAnswer === "q") {

        console.log("Ok you have decided to quit game.");
        gameOver = true;

    }
    else if (userAnswer === 'w') {

        console.log("Your walking in the jungle now. Becareful Demo Animals hunt at sunset")
        if (animalAppears()) {
            console.log("A demon animal has appeared");
            let currentEnemy = getRandomEnemy();
            console.log(`its a ${currentEnemy.name}`)
            console.log("Do you want to attack or run?")
            let userAnswer = ask.question("Enter 'a' to attack. Enter 'r' to run. ");

            if (userAnswer === 'a') {

                fight((currentEnemy))

            } else if (userAnswer === 'r') {
                run()
            }

        }


    }
    else if (userAnswer === 'p') {
        console.log(`name: ${contender.name}::: HP: ${contender.health}: inventroy:${inventory.map(item => { return item })}`)
    }

}
function run() {
    let chance = Math.floor(Math.random() * Math.floor(10));

    if (chance <= 4) {
        console.log("You escaped from Demon animal");
        gameOver = false
    } else {
        console.log("you died")
        gameOver = true
    }


}


function animalAppears() {
    let val = Math.random()
    if (val < 0.25) {
        return true;
    } else {
        return false;

    }
}

function Animal(name, offense, hitPoints, item) {
    this.name = name;
    this.offense = offense;
    this.hitPoints = hitPoints;
    this.item = item;
    
}

function getRandomEnemy() {
    let index = Math.floor(Math.random() *
        Math.floor(demonAnimals.length));

    return demonAnimals[index];
}

function fight(currentEnemy) {
    while (contender.health > 0 && currentEnemy.hitPoints > 0) {
        let damageToEnemy = Math.floor((Math.random() * 50));
        let damageToPlayer = Math.floor((Math.random() * currentEnemy.offense));
        console.log('-------')
        console.log("Animal is attacking:" + damageToPlayer);
        console.log("Player is attacking animal:" + damageToEnemy);
        currentEnemy.hitPoints -= damageToEnemy;
        contender.health -= damageToPlayer;

        console.log("You fought this demon animal and your health is at this level. " + contender.health)
        console.log("currentEnemy hit points " + currentEnemy.hitPoints);
        console.log('----------')
    }

    if (contender.health <= 0) {
        console.log("You have died");
        gameOver = true;
    } else {
        inventory.push(currentEnemy.item);
        console.log("You killed the Demon Animal");
        console.log("Your weapons inventory is");
        inventory.forEach((item, index) => {
            console.log(`${index}:${item}`)
        });
        gameOver = false
    }

}
