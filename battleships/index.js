const player1Table = document.getElementById('player1-table');
const tracker = document.getElementById("ship-tracker");

let hits = 4;
let tries = 50;

player1Table.addEventListener('click', (e) => {
    const clickedBtn = e.target;
    console.log(clickedBtn);

    if(clickedBtn.firstChild){
        clickedBtn.firstChild.classList.add("hit");
        ships.forEach((ship) => {
            if(ship.includes(clickedBtn.id)){
                console.log(ship.length);
                if(ship.length === 2){
                    ship1.shipHit();
                } else if(ship.length === 3){
                    ship2.shipHit();
                } else if(ship.length === 4){
                    ship3.shipHit();
                } else if(ship.length === 5){
                    ship4.shipHit();
                }
            }
        });
    } else {
        const i = document.createElement('i');
        i.classList.add('fa-solid');
        i.classList.add('fa-xmark');
        clickedBtn.append(i);
    }
    if(ship1.hits === 0){
        hits = hits - 1;
        Object.assign(ship1, ship1.hits = 1);
    } else if (ship2.hits === 0){
        hits = hits - 1;
        Object.assign(ship2, ship2.hits = 1);
    } else if (ship3.hits === 0){
        hits = hits - 1;
        Object.assign(ship3, ship3.hits = 1);
    } else if (ship4.hits === 0){
        hits = hits - 1;
        Object.assign(ship4, ship4.hits = 1);
    }
    tracker.textContent = `${hits}`;
});


// Classes 

class Ships {
    constructor(name, length, letters, numbers) {
        this.name = name;
        this.length = length;
        this.letters = letters;
        this.numbers = numbers;
    }



}

class ShipOne extends Ships {
    constructor(name, length, letters, numbers) {
        super(name, length, letters, numbers)
    }
    hits = this.length;
    placeShips1() {
        let str = []
        for (const letter of this.letters) {
            str.push(`${letter}${this.numbers}`)
        }
        for(const location of str){
            const i = document.createElement("i");
            i.classList.add("fa-solid");
            i.classList.add("fa-ship");
            i.classList.add("hidden");
            const ship = document.getElementById(location);
            ship.append(i);
        }
        return str;
    }
    shipHit(){
        this.hits = this.hits - 1;
    }

}

class ShipTwo extends Ships {
    constructor(name, length, letters, numbers) {
        super(name, length, letters, numbers)
    }
    hits = this.length;
    placeShips1() {
        let str = []
        for (const letter of this.letters) {
            str.push(`${letter}${this.numbers}`)
        }
        for(const location of str){
            const i = document.createElement("i");
            i.classList.add("fa-solid");
            i.classList.add("fa-ship");
            i.classList.add("hidden");
            const ship = document.getElementById(location);
            ship.append(i);
        }
        return str;
    }
    shipHit(){
        this.hits = this.hits - 1;
    }
}

class ShipThree extends Ships {
    constructor(name, length, letters, numbers) {
        super(name, length, letters, numbers)
    }
    hits = this.length;
    placeShips1() {
        let str = []
        for (const letter of this.letters) {
            str.push(`${letter}${this.numbers}`)
        }
        for(const location of str){
            const i = document.createElement("i");
            i.classList.add("fa-solid");
            i.classList.add("fa-ship");
            i.classList.add("hidden");
            const ship = document.getElementById(location);
            ship.append(i);
        }
        return str;
    }
    shipHit(){
        this.hits = this.hits - 1;
    }
}

class ShipFour extends Ships {
    constructor(name, length, letters, numbers) {
        super(name, length, letters, numbers)
    }
    hits = this.length;
    placeShips1() {
        let str = []
        for (const letter of this.letters) {
            str.push(`${letter}${this.numbers}`)
        }
        for(const location of str){
            const i = document.createElement("i");
            i.classList.add("fa-solid");
            i.classList.add("fa-ship");
            i.classList.add("hidden");
            const ship = document.getElementById(location);
            ship.append(i);
        }
        return str;
    }
    shipHit(){
        this.hits = this.hits - 1;
    }
}

class ShipFive extends Ships {
    constructor(name, length, letters, numbers) {
        super(name, length, letters, numbers)
    }
    hits = this.length;
    placeShips1() {
        let str = []
        for (const letter of this.letters) {
            str.push(`${letter}${this.numbers}`)
        }
        for(const location of str){
            const i = document.createElement("i");
            i.classList.add("fa-solid");
            i.classList.add("fa-ship");
            i.classList.add("hidden");
            const ship = document.getElementById(location);
            ship.append(i);
        }
        return str;
    }
    shipHit(){
        this.hits = this.hits - 1;
    }
}


const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];


// Functions

// function to generate 2 random letters
function generateRandomLetters1() {
    // select a random index from the letters array
    let randomIndex = Math.floor(Math.random() * letters.length);
    if (letters[randomIndex] === "j") {
        return [letters[randomIndex], letters[(randomIndex - 1) % letters.length]];
    }
    // return the letter at the selected index and the next letter in the array

    return [letters[randomIndex], letters[(randomIndex + 1) % letters.length]];

}

function generateRandomLetters2() {
    // select a random index from the letters array
    let randomIndex = Math.floor(Math.random() * letters.length);
    if (letters[randomIndex] === "j" || letters[randomIndex] === "i") {
        return [letters[randomIndex], letters[(randomIndex - 1) % letters.length], letters[(randomIndex - 2) % letters.length]];
    }
    // return the letter at the selected index and the next letter in the array

    return [letters[randomIndex], letters[(randomIndex + 1) % letters.length], letters[(randomIndex + 2) % letters.length]];

}

function generateRandomLetters3() {
    // select a random index from the letters array
    let randomIndex = Math.floor(Math.random() * letters.length);
    if (letters[randomIndex] === "j" || letters[randomIndex] === "h" || letters[randomIndex] === "i") {
        return [letters[randomIndex], letters[(randomIndex - 1) % letters.length], letters[(randomIndex - 2) % letters.length], letters[(randomIndex - 3) % letters.length]];
    }
    // return the letter at the selected index and the next letter in the array

    return [letters[randomIndex], letters[(randomIndex + 1) % letters.length], letters[(randomIndex + 2) % letters.length], letters[(randomIndex + 3) % letters.length]];

}

function generateRandomLetters4() {
    // select a random index from the letters array
    let randomIndex = Math.floor(Math.random() * letters.length);
    if (letters[randomIndex] === "j" || letters[randomIndex] === "h" || letters[randomIndex] === "i" || letters[randomIndex] === "g") {
        return [letters[randomIndex], letters[(randomIndex - 1) % letters.length], letters[(randomIndex - 2) % letters.length], letters[(randomIndex - 3) % letters.length], letters[(randomIndex - 4) % letters.length]];
    }
    // return the letter at the selected index and the next letter in the array

    return [letters[randomIndex], letters[(randomIndex + 1) % letters.length], letters[(randomIndex + 2) % letters.length], letters[(randomIndex + 3) % letters.length], letters[(randomIndex + 4) % letters.length]];

}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function generateRandomNumbers1() {
    // select a random index from the letters array
    let randomIndex = Math.floor(Math.random() * numbers.length);
    // return the letter at the selected index and the next letter in the array
    const num = numbers[randomIndex]
    numbers.splice(randomIndex, 1)
    return num;

}



// Declare Variables as new Ships

const ship1 = new ShipOne("Destroyer", 2, generateRandomLetters1(), generateRandomNumbers1());
const ship2 = new ShipTwo("Cruiser", 3, generateRandomLetters2(), generateRandomNumbers1());
const ship3 = new ShipThree("BattleShip", 4, generateRandomLetters3(), generateRandomNumbers1());
const ship4 = new ShipFour("Carrier", 5, generateRandomLetters4(), generateRandomNumbers1());

console.log(ship1.placeShips1())
console.log(ship2.placeShips1())
console.log(ship3.placeShips1())
console.log(ship4.placeShips1())

const ships = [ship1.placeShips1(), ship2.placeShips1(), ship3.placeShips1(), ship4.placeShips1()];
console.log(ships);