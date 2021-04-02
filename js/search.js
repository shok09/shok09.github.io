'use strict'

const authors = [
    [ "Green Day", "Green Day" ],
    [ "Three Days Grace", "Three Days Grace" ],
    [ "Blink-182", "Blink 182" ],
]
const searchButton = document.getElementById('searchButton');
const searchBox = document.getElementById('searchBox');
const authorSelect = document.getElementById('authorSelectMenu');
const authorButton = document.getElementById(authorSelect.getAttribute('for'));

function onSearchInit(evt) {
    alert("Not yet implemented");
}
function onAuthorSelect(evt) {
    authorButton.textContent = evt.target.textContent;
    authorButton.setAttribute('data-selected', evt.target.getAttribute('data-author'));
}

for (let i=0; i < authors.length; ++i) {
    let option = document.createElement('li');
    option.className = 'mdl-menu__item';
    option.textContent = authors[i][0];
    option.setAttribute('data-author', authors[i][1]);
    authorSelect.appendChild(option);
    option.addEventListener('click', onAuthorSelect, false);
}
authorSelect.firstElementChild.click();

searchButton.addEventListener("click", onSearchInit, false);
searchBox.addEventListener('change', onSearchInit, false);
