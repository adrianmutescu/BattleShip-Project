const player1Table = document.getElementById('player1-table');

player1Table.addEventListener("click", (e) => {
  const clickedBtn = e.target;
  // const image = clickedBtn.firstChild;
  // image.classList.add("fa-xmark");

  const i = document.createElement("i");
  i.classList.add("fa-solid");
  i.classList.add("fa-xmark");
  clickedBtn.append(i);
});

function randomNumber(){
  let x = Math.floor((Math.random() * 10));
  return x;
}

function generateLetterShip(){
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  letters[randomNumber()];
}

class Ship {
  letter = "";
  number = "";
}