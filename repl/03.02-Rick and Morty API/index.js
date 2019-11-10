//jshint esversion:7

// Let 's use the Rick and Morty API to grab character names and 
// display them to the screen.

// We want to focus on fetching and displaying content to the screen, 
// so I 'll share starter code with you.

// The API states that we can grab character data using this baseURL:
//     'https://rickandmortyapi.com/api/character/'
// with a number at the end.

// Let 's make our form
// submit the character number we want to find 
// and display that character 's name in an h1 tag.  

// Remember that you'll
// need to use a 'fetch' in order to access the Rick and Morty API.

// I have provided started HTML code
// for you.


let form = document.querySelector('form');
let input = document.querySelector('input');
let body = document.querySelector('body');

const baseURL = 'https://rickandmortyapi.com/api/character/';

form.addEventListener('submit', fetchRickAndMorty);

function fetchRickAndMorty(event) {
    event.preventDefault();

    fetch(baseURL + input.value)
        .then(results => results.json())
        .then(json => {
            console.log(json);
            displayCharactersInfo(json);
        })
        .catch(err => console.log(err));
}

function displayCharactersInfo(characterInfo) {
    
        let charMember = document.createElement('h1');
        charMember.innerText = characterInfo.name;
        body.appendChild(charMember);
    
}
