//DADO
console.log(hello);                                   
var hello = 'world';                                 

// var hello
// undefined
// hello = 'word'

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// lin.10 -> undefined
// test = () => {
    // var needle = 'magnet';
    // console.log(needle);
    // }

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}

console.log(brendan);

//super cool -> local scope 


var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//chicken
//function eat() {...}
//eat()
//half-chicken

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//funcion es anonima, por lo tanto mean es una variable no definida

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre 
//undefined
// var genre = "disco"
//function rewind() {..}
//rock
//r&b
//disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//san jose
//function learn(){...}
//learn()
//seattle
//burbank
//san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//dojo es una const por lo tanto su valor no puede cambiar de {} a "closed for now"