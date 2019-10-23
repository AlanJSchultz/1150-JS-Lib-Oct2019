// objects


// object literals
var bobAlcorn = {
    name        :   "Bob Alcorn",
    age         :    59,
    vocation    :   "CEO",
    isRetired   :   false
};

//  dot notations
console.log(bobAlcorn);
console.log(bobAlcorn.name);
console.log(bobAlcorn.age);

// undefined
console.log(bobAlcorn.middleName);  // undefined since this property doesn't exist

// practice
var player = {
    username    :   "Brett Farve",
    power       :   8,
    toughness   :   "near extreme"
}
console.log(player.username);
