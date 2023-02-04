const player1Table = document.getElementById('player1-table');

// player1Table.addEventListener('click', (e) => {
//     const clickedBtn = e.target;
//     // const image = clickedBtn.firstChild;
//     // image.classList.add("fa-xmark");

//     const i = document.createElement('i');
//     i.classList.add('fa-solid');
//     i.classList.add('fa-xmark');
//     clickedBtn.append(i);
// });


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
    placeShips1() {
        let str = []
        for (const letter of this.letters) {
            str.push(`${letter}${this.numbers}`)
        }
        console.log(str)
    }

}

class ShipTwo extends Ships {
    constructor(name, length, letters, numbers) {
        super(name, length, letters, numbers)
    }
    placeShips1() {
        let str = []
        for (const letter of this.letters) {
            str.push(`${letter}${this.numbers}`)
        }
        console.log(str)
    }
}

class ShipThree extends Ships {
    constructor(name, length, letters, numbers) {
        super(name, length, letters, numbers)
    }
    placeShips1() {
        let str = []
        for (const letter of this.letters) {
            str.push(`${letter}${this.numbers}`)
        }
        console.log(str)
    }
}

class ShipFour extends Ships {
    constructor(name, length, letters, numbers) {
        super(name, length, letters, numbers)
    }
    placeShips1() {
        let str = []
        for (const letter of this.letters) {
            str.push(`${letter}${this.numbers}`)
        }
        console.log(str)
    }
}

class ShipFive extends Ships {
    constructor(name, length, letters, numbers) {
        super(name, length, letters, numbers)
    }
    placeShips1() {
        let str = []
        for (const letter of this.letters) {
            str.push(`${letter}${this.numbers}`)
        }
        console.log(str)
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