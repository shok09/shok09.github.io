'use strict';

const members = [
	"Паньків Олександр",
	"Антонов Олександр",
	"Мозоль Станіслав",
	"Олійник Роман",
]

const membersList = document.getElementById('members');

for (let i=0; i < members.length; ++i) {
    let option = document.createElement("p");
    option.textContent = members[i];
    membersList.appendChild(option);
}