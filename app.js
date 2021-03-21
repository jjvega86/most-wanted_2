"use strict";

// TODO: Display all search results on a table

const displayTableResults = (people) => {
  let table = document.getElementById("myTable");

  people.forEach((element) => {
    table.innerHTML += `<tr>
      <td>${element.firstName}</td>
      <td>${element.lastName}</td>
      <td>${element.occupation}</td>
    </tr>
    
    `;
  });
};

// TODO: Get form input and return as an object or array from a function

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
