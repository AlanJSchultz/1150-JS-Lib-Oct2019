//jshint esversion:8

let starWarsPeopleList= document.querySelector('ul');

fetch('https://swapi.co/api/people')
    .then(function(response) {
        // console.log(response);
        return response.json();
    })
    .then(function(json) {
        // console.log(json);
        let people = json.results;

        // for-of prints the objects in the console.log
        for (let p of people) {
            // console.log(p);
            let listItem = document.createElement('li');
            listItem.innerHTML = '<p>' + p.name + '</p>';
            starWarsPeopleList.appendChild(listItem);
        }
        
        // for-in prints only the index of the array
        // for (const p in people) {
        //     console.log(p);
        // }


    });

