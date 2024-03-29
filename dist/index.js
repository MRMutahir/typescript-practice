"use strict";
let userOne = {
    paynumber: 20,
    recivenumber: 10
};
let usertwo = {
    paynumber: 40,
    recivenumber: 30
};
let user = {
    name: "Muhammad Mutahir",
    number: 123,
    details: [userOne, usertwo]
};
let matricstudents = {
    name: "Muhammad Mutahir",
    age: 10,
    rollNumber: 1
};
let interstudents = {
    age: 1,
    name: "Muhammad Ali",
    rollNumber: 23,
    subject: [12, 1]
};
function fooOne(a) {
    // console.log(a)
}
fooOne(12);
const book = {
    name: "Bio",
    price: 200,
    size: 100
};
// console.log(book, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>book")
// Union Types
function getThree(content) {
    // console.log(content.slice(0, 2))
}
getThree([1, 2, 3, 4, 5]);
// Generics
function anyThing(arg) {
    // console.log(arg)
    return arg;
}
anyThing(["a", 1, true, { name: "Muhammad Mutahir" }]);
