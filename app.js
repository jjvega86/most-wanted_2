"use strict";

// Table Functions

const displayTableResults = (people) => {
  let table = document.getElementById("tableBody");

  if (table.innerHTML != ""){
    clearTableResults();
  }
  people.forEach((element) => {
    table.innerHTML += `<tr>
      <td>${element.firstName}</td>
      <td>${element.lastName}</td>
      <td>${element.gender}</td>
      <td>${element.height}</td>
      <td>${element.weight}</td>
      <td>${element.eyeColor}</td>
      <td>${element.occupation}</td>
      <td><button>Display Family</button></td>
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
  let gender = document.querySelector("#gender").value;
  let eyeColor = document.querySelector("#eyecolor").value;
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  let occupation = document.querySelector("#occupation").value;
  let traits = [gender, eyeColor, height, weight, occupation];

  


}

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


