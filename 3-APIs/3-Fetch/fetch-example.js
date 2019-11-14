//jshint esversion:8

fetch('http://example.com/movies.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
    });

    /*
Http - Server
In order to access some APIs without deploying an application, 
you can create a virtual server on your machine to accept the 
returned data using an npm package called http - server.

Run the following command in your terminal window:
    WINDOWS
npm install - g http - server

Go to localhost: 8080 and the app you 're running should appear. 
If for some reason you get an error message saying that port 8080 
is in use (or something along those lines), just add -p to specify 
a port number. A port number can be just about anything, but some 
of the more commonly used ones are 80, 3000, 4000, and 8080.
    */

