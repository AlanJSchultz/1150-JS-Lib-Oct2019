//jshint esversion:8

/*
#NEW YORK TIMES API
*/


const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1 NYT API endpoint
const key = 'v4BiRKOhf0mWGoer3OfAAAA4V0lgYWmK'; //2 NYT API key
let url; //3 variable declared


// set up variables that reference DOM elements

// search form
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

// results navigation
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

// results section
const section = document.querySelector('section');

nav.style.display = 'none';

// pagination and display hidden until we want it later
let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;


// event listeners
        //1                     //2   
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3


// # fetchResults()
                    // 1
function fetchResults(e) {  // (e) is event handling function nwhich receives an event object
    console.log(e); // 2
    e.preventDefault();  // make sure that a request isn't actually sent since the form wants to post a request and we actually want to GET data

    // Accessing a REST API, makes a target request to its URL
    // assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3
    console.log(url);  // 4


    // conditional statements for end and start dates, ignored if left blank

    if (startDate.value !== '') {
        console.log(startDate.value);
        url += '&begin_date=' + startDate.value;
    }

    if (endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    }


    //1 fetch is reserved keyword to request info, similar to GET with HTTP
    fetch(url)
        .then(function(result) {
            // console.log(result);
            return result.json();  //2 creates a promise with a result json object
        })
        .then(function(json) {
            // console.log(json);  // 3 - json object is used in another promise to send info received to another function (console.log for now)
            displayResults(json);
        });
}


function displayResults(json) {
    // console.log("DisplayResults", json);
    // console.log(json.response.docs);

    while (section.firstChild) {
        section.removeChild(section.firstChild); //1

    }

    let articles = json.response.docs;

    if (articles.length >= 10) {
        nav.style.display = 'block'; //shows the nav display if 10 items are in the array
    } else {
        nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
    }

    if (articles.length === 0) {
        console.log("No results");
    } else {
        // Display the data
        for (let i = 0; i < articles.length; i++) {
            console.log(i); 
            let article = document.createElement('article');  // 1
            let heading =document.createElement('h2');  // 2
            let link =document.createElement('a');  // 1
            let img = document.createElement('img'); //1
            let para = document.createElement('p'); //1
            let clearfix = document.createElement('div'); //2

            let current = articles[i];  // 2
            console.log("Current:", current);  // 3

            link.href = current.web_url;  // 4
            link.textContent = current.headline.main;  // 5

            para.textContent = 'Keywords: '; //3

            //4
            for (let j = 0; j < current.keywords.length; j++) {
                //5
                let span = document.createElement('span');
                //6
                span.textContent += current.keywords[j].value + ' ';
                //7
                para.appendChild(span);
            }

            //2
            if (current.multimedia.length > 0) {
                //3
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                //4
                img.alt = current.headline.main;
            }

            //8
            clearfix.setAttribute('class', 'clearfix')
            
            article.appendChild(heading);  // 3
            heading.appendChild(link);  // 6
            article.appendChild(img); //5
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);  // 4
        }
    }
}


function nextPage(e) {
    console.log("Next button clicked");
    pageNumber++; //1
    fetchResults(e); //2
    console.log("Page number:", pageNumber); //3
}  // 5

function previousPage(e) {
    console.log("Previous button clicked");
    if (pageNumber > 0) { //1
        pageNumber--; //2
    } else {
        return; //3
    }
    fetchResults(e); //4
    console.log("Page:", pageNumber); //5
}  // 5


