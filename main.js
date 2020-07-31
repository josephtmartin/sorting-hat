'use strict';

const formName = [''];

const hogwartsHouses = [
  {
    studentName: 'Harry Potter',
    houseName: 'Gryffindor',
  },
  {
    studentName: 'Silvanus Kettleburn',
    houseName: 'Hufflepuff',
  },
  {
    studentName: 'Filius Flitwick',
    houseName: 'Ravenclaw',
  },
  {
    studentName: 'Draco Malfoy',
    houseName: 'Slytherin',
  },
];

const handleIntroButtonClick = (e) => {
    document.getElementById('sortingForm').style.display = 'block';
};

const handleSubmitButtonClick = (e) => {
  let inputName = document.getElementById('studentName').value;

  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
  let randomHouse = houses[Math.floor(Math.random() * houses.length)];
  console.log('inputName:', inputName);
  console.log('randomHouse:', randomHouse);
  let obj = {};
};

const buttonEvents = () => {
  document
    .querySelector('#submit')
    .addEventListener('click', handleSubmitButtonClick);
  document
    .querySelector('#introBtn')
    .addEventListener('click', handleIntroButtonClick);
    
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const cardBuilder = (arr) => {
  let domString = '';

  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src=".../100px180/" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${hogwartsHouses[i].studentName}</h5>
                            <p class="card-text">${hogwartsHouses[i].houseName}</p>
                            <a href="#" class="btn btn-danger">Expel</a>
                        </div>
                    </div>`;
  }

  printToDom('cards', domString);
};

const init = () => {
  cardBuilder(hogwartsHouses);
  buttonEvents();
};

init();
