"use strict";
// Global Declarations
let peopleData = []; //whenever all people are displayed or a search is called, set his variable
// to be used in dynamically generated event handlers

document.body.addEventListener('click', (e) => {
  console.log(e.target.id)
  if(e.target.id.includes('family')){
    console.log("Family!")
    getFamily(e.target.id, peopleData);
  }
})

// Table Functions

const displayTableResults = (people) => {
  let table = document.getElementById("tableBody");
  peopleData = people;

  if (table.innerHTML != "") {
    clearTableResults();
  }
  people.forEach((person, index) => {
    let familyString = "family" + index;
    table.innerHTML += `<tr>
      <td>${person.firstName}</td>
      <td>${person.lastName}</td>
      <td>${person.gender}</td>
      <td>${person.height}</td>
      <td>${person.weight}</td>
      <td>${person.eyeColor}</td>
      <td>${person.occupation}</td>
      <td><button id=${familyString}>Display Family</button></td>
      <td><button>Display Descendants</button></td>
    </tr>
    
    `;
  });

};



const clearTableResults = () => {
  var tbody = document.querySelector("#tableBody");

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
};

// Search Functions
const searchByName = (people) => {
  let firstName = document.querySelector("#fname").value;
  let lastName = document.querySelector("#lname").value;

  let filteredPeople = people.filter((person) => {
    if (person.firstName == firstName || person.lastName == lastName) {
      return true;
    } else {
      return false;
    }
  });
  clearTableResults();
  displayTableResults(filteredPeople);
  modal.style.display = "none";
};

const searchByTrait = (people) => {
  let filteredPeople = people;
  let traitsArray = assignTraits();

  do {
    let [key, value] = traitsArray[0];
    if (value != "") {
      let currentPeople = filteredPeople.filter((person) => {
        if (person[key].toLowerCase() == value.toLowerCase()) {
          return true;
        }
      });
      filteredPeople = currentPeople;
    }
    let traitsArrayNew = traitsArray.filter(
      (newTrait) => newTrait != traitsArray[0]
    );
    traitsArray = traitsArrayNew;
  } while (traitsArray.length > 0);

  modal.style.display = "none";
  displayTableResults(filteredPeople);
};

const assignTraits = () => {
  let gender = document.querySelector("#gender").value;
  let eyeColor = document.querySelector("#eyecolor").value;
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  let occupation = document.querySelector("#occupation").value;
  let traits = {
    gender: gender,
    eyeColor: eyeColor,
    height: height,
    weight: weight,
    occupation: occupation,
  };
  let traitsArray = Object.entries(traits);

  return traitsArray;
};

// Family + Descendants Functions

const getFamily = (familyId, people) => {console.log("You're getting family!", people)};

// Modal Functions

let modalBtn = document.querySelector("#modal-btn");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");
let submitBtn = document.querySelector("#onSubmit");

modalBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
