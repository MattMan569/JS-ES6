'use strict';

/////////////////////////////////
//                             //
//    Variable declarations    //
//                             //
/////////////////////////////////

/*
// ES 5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES 6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

/*
// ES 5
function driversLicense5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', ', yearOfBirth);
};
driversLicense5(true);

// ES 6
function driversLicense6(passedTest) {
    if (passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1990;
    }
    console.log(firstName + ', ', yearOfBirth);
};
driversLicense6(true);
*/




////////////////////////////
//                        //
//    Blocks and IIFEs    //
//                        //
////////////////////////////

/*
// ES 5
(function() {
    var a = 3;
})();
// console.log(a);

// ES 6
{
    const b = 1;
    let c = 2;
    var d = 3;
}
// console.log(b);
// console.log(c);
console.log(d);
*/




///////////////////
//               //
//    Strings    //
//               //
///////////////////

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return (new Date).getFullYear() - year;
}

// ES 5 - string concatination
console.log('This is ' + firstName + ' ' + lastName
    + '. He was born in ' + yearOfBirth + '. Today he is '
    + calcAge(yearOfBirth) + ' years old.');

// ES 6 - template literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. \
Today he is ${calcAge(yearOfBirth)} years old.`);

// New string functions
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('h'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));
*/




///////////////////////////
//                       //
//    Arrow functions    //
//                       //
///////////////////////////

/*
const years = [1990, 1965, 1982, 1937];

// ES 5
var ages5 = years.map(function(el, i, arr) {
    return (new Date).getFullYear() - el;
});
console.log(ages5);

// ES 6
let ages6 = years.map(el => (new Date).getFullYear() - el);
console.log(ages6);

ages6 = years.map((el, i, arr) =>
    `Age element ${i}: ${(new Date).getFullYear() - el}.`
);
console.log(ages6);

ages6 = years.map((el, i, arr) => {
    const now = (new Date).getFullYear();
    const age = now - el;
    return `Age element ${i}: ${age}.`;
});
console.log(ages6);
*/




//////////////////////////////////////////
//                                      //
//    Arrow functions & lexical this    //
//                                      //
//////////////////////////////////////////

/*
// ES 5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        // This function is a callback, not a method. 'this' will point
        // to the global object, the window. Assign 'this' to a variable
        // to access it inside a non-method function.
        document.querySelector('.green').addEventListener('click', function() {
            var s = 'This box number ' + self.position + ' and it is ' + self.color;
            alert(s);
        });
    }
}
// box5.clickMe();

// ES 6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        // This function is a callback, not a method. 'this' will point
        // to the global object, the window. Assign 'this' to a variable
        // to access it inside a non-method function.
        document.querySelector('.green').addEventListener('click', () => {
            var s = 'This box number ' + this.position + ' and it is ' + this.color;
            alert(s);
        });
    }
}
box6.clickMe();

// Function constructor
function Person(name) {
    this.name = name;
}

// ES 5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this)); // Have to manually bind to the method's 'this' (the person)
    console.log(arr);
}

// ES 6
Person.prototype.myFriends6 = function(friends) {
    const arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
var john = new Person('John');

john.myFriends5(friends);
john.myFriends6(friends);
*/




/////////////////////////
//                     //
//    Destructuring    //
//                     //
/////////////////////////

/*
// ES 5
var john = ['John', 26];
var name5 = john[0];
var age5 = john[1];

// ES 6
const [name6, age6] = ['John', 26];
// const [name6, age6] = john;
console.log(name6);
console.log(age6);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj; // New var names must match object keys
console.log(firstName, lastName);

const {firstName: f, lastName: l} = obj; // Using different var names
console.log(f, l);

// Return multiple values from a function
function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}
const [age, retirement] = calcAgeRetirement(1997);
console.log(age, retirement);
*/




//////////////////
//              //
//    Arrays    //
//              //
//////////////////

/*
const boxes = document.querySelectorAll('.box');

// ES 5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(el) {
    el.style.backgroundColor = 'dodgerblue';
});

// ES 6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(el => el.style.backgroundColor = 'dodgerblue');

// or:
Array.from(boxes).forEach(el => el.style.backgroundColor = 'dodgerblue');


// ES 5
for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}

// ES 6
for (const box of boxesArr6) {
    if (box.className.includes('blue')) {
        continue;
    }
    box.textContent = 'I changed to blue! (ES 6)';
}


var ages = [12, 17, 8, 21, 14, 11];

// ES 5
var full5 = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full5);
console.log(full5.indexOf(true));
console.log(ages[full5.indexOf(true)]);

// ES 6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/




///////////////////////////
//                       //
//    Spread Operator    //
//                       //
///////////////////////////

/*
// Using arrays as arguments
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

var ages = [18, 30, 12, 21];

// ES 5
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES 6
const sum3 = addFourAges(...ages);
console.log(sum3);

// Joining arrays
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Steve', ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box'); // node list
const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');
*/




///////////////////////////
//                       //
//    Rest Parameters    //
//                       //
///////////////////////////

/*
// ES 5
function isFullAge5() {
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
        console.log((new Date().getFullYear() - cur) >= 18);
    });
}
isFullAge5(1990, 2005, 1965);

// ES 6
function isFullAge6(...years) {
    years.forEach(cur => console.log((new Date().getFullYear() - cur) >= 18));
}
isFullAge6(1990, 2005, 1965);


// ES 5
function isFullAge55(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function(cur) {
        console.log((new Date().getFullYear() - cur) >= limit);
    });
}
isFullAge55(16, 1990, 2005, 1965);

// ES 6
function isFullAge66(limit, ...years) {
    years.forEach(cur => console.log((new Date().getFullYear() - cur) >= limit));
}
isFullAge66(16, 1990, 2005, 1965);
*/




//////////////////////////////
//                          //
//    Default Parameters    //
//                          //
//////////////////////////////

/*
// ES 5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

// ES 6
function LeePerson(firstName, yearOfBirth, lastName = 'Lee', nationality = 'american') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var bob = new LeePerson('Bob', 1969);
var omar = new LeePerson('Omar', 1999, 'Babushka', 'russian');
*/




////////////////
//            //
//    Maps    //
//            //
////////////////

/*
const question = new Map();
question.set('question', 'What is the official name of the lastest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

// console.log(question.get('question'));
// console.log(question.size);

// if (question.has(4)) {
//     question.delete(4);
// }

// question.clear();

// question.forEach((value, key) => console.log(`Key: ${key}\nValue: ${value}`));

for (const [key, value] of question.entries()) { // destructuring
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt(question.get('question')));
console.log(question.get(ans === question.get('correct')));
*/




///////////////////
//               //
//    Classes    //
//               //
///////////////////

/*
// ES 5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');
john5.calculateAge();

// ES 6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');
john6.calculateAge();
Person6.greeting();
*/




/////////////////////////////
//                         //
//    Class Inheritence    //
//                         //
/////////////////////////////

// ES 5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job); // 'this' is the new athlete
    this.olympicGames = olympicGames;
    this.medals = medals;
}

// Wrong! Must come after function constructor connection
// Athlete5.prototype.wonMedal = function() {
//     this.medals++;
//     console.log(this.medals);
// }

// Connect the two function constructors for a proper prototype chain
Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

// ES 6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor (name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
