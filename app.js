"use strict";

// TODO: Display all search results on a table

const displayTableResults = (people) => {
  let table = document.getElementById("myTable");

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

const searchByName = (people) => {
  let name = "Uma";
  let filteredPeople = people.filter((person) => {
    if (person.firstName == name) {
      return true;
    } else {
      return false;
    }
  });

  return filteredPeople[0];
};

const searchByTrait = (people) => {
  //
};

// Modal Functions
let modalBtn = document.querySelector("#modal-btn");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");

modalBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if(e.target == modal){
    modal.style.display = "none"
  }

}
