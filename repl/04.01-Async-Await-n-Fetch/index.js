//jshint esversion:8

/*

04.01 - Async, Await, and Fetch

Using async /await, write a function
that fetches a star wars character using the url:
'https://swapi.co/api/people/<number here>'.

It should console.log the results of the fetch
before console.logging a message saying 
this should print last'.

*/

async function starWarsPerson(number) {
    
    await fetch('https://swapi.co/api/people/' + number)
        .then(res => res.json())
        .then(json => console.log(json.name));
    console.log('This should print last.');
}
starWarsPerson(1);

// Luke Skywalker
// This should print last.
