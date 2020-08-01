'use strict';

const hatCards = [];

const introButtonClick = (e) => {
  document.getElementById('sortingForm').style.display = 'block';
};

const submitButtonClick = (e) => {
  let inputName = document.getElementById('studentName').value;

  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
  let randomHouse = houses[Math.floor(Math.random() * houses.length)];

  if (inputName === '') {
    errorMessage();
  } else {
    let houseSelection = {
      studentName: inputName,
      houseName: randomHouse,
    };
    hatCards.push(houseSelection);
    cardBuilder(hatCards);
  }
};

const errorMessage = () => {
  alert('You need to enter a name');
};

const expelStudent = (e) => {
  const ctype = e.target.type;
  const target = e.target.id;
  if (ctype === 'button') {
    hatCards.splice(target, 1);
    cardBuilder(hatCards);
  }
};

const buttonEvents = () => {
  document
    .querySelector('#introBtn')
    .addEventListener('click', introButtonClick);
  document
    .querySelector('#submit')
    .addEventListener('click', submitButtonClick);
  document.querySelector('#cards').addEventListener('click', expelStudent);
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const cardBuilder = (arr) => {
  let domString = '';

  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="card" style="width: 18rem;" id="${i}>
                    <img class="card-img-top" src=".../100px180/" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${hatCards[i].studentName}</h5>
                            <p class="card-text">${hatCards[i].houseName}</p>
                            <a href="#" class="btn btn-danger" type="button" id="${i}">Expel</a>
                        </div>
                    </div>`;
  }

  printToDom('cards', domString);
};

const init = () => {
  cardBuilder(cards);
  buttonEvents();
};

init();
