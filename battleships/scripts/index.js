const player1Table = document.getElementById('player1-table');

player1Table.addEventListener('click', (e) => {
  const clickedBtn = e.target;
  // const image = clickedBtn.firstChild;
  // image.classList.add("fa-xmark");

  const i = document.createElement('i');
  i.classList.add('fa-solid');
  i.classList.add('fa-xmark');
  clickedBtn.append(i);
});

function randomNumberLetter() {
  let x = Math.floor(Math.random() * 10);
  return x;
}

function randomNumber() {
  let x = Math.floor(Math.random() * 10 + 1);
  return x;
}

function generateLetterShip() {
  const num = randomNumberLetter();
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const position = [];
  if (num === 9 || num === 8) {
    position.push(letters[num]);
    position.push(letters[num - 1]);
    position.push(letters[num - 2]);
  } else {
    position.push(letters[num]);
    position.push(letters[num + 1]);
    position.push(letters[num + 2]);
  }
  return position;
}

function generateNumberShip() {
  const num = randomNumber();
  const position = [];
  if (num === 10 || num === 9) {
    position.push(num);
    position.push(num - 1);
    position.push(num - 2);
  } else {
    position.push(num);
    position.push(num + 1);
    position.push(num + 2);
  }
  return position;
}

class VerticalShip {
  letters = generateLetterShip();
  number = randomNumber();
}

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

class HorizontalShip {
  letter = letters[randomNumber()];
  numbers = generateNumberShip();
}

console.log(new VerticalShip());
console.log(new VerticalShip());
console.log(new HorizontalShip());
