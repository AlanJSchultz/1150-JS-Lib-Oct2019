//jshint esversion:7



/*
Have students throw this code into VSC--they should open their console to view the results
*/
var time = Date.now();
x = () => {
    let x = dateToTime(1000);
    return x.length < 2 ? '0' + x : x;
};

function y() {
    let y = dateToTime(60000);
    return y.length < 2 ? '0' + y : y;
}

function z() {
    let z = dateToTime(3600000);
    return z.length < 2 ? '0' + z : z;
}
dateToTime = (interval) => {
    return Math.floor((Date.now() - time) / interval % 60).toString();
};
displayHandler = () => {
    console.log(z() + ':' + y() + ':' + x());
    if (x() % 10 == Math.floor(Math.random() * 10)) {
        console.log('this is an excellent time!');
    }
};
let updater = window.setInterval(displayHandler, 1000);

// run this in codepen.io


