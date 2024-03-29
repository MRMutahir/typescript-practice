interface bankmoney {
    paynumber: number;
    recivenumber: number
}

interface User {
    name: string,
    number: number,
    details: bankmoney[]
}

let userOne: bankmoney = {
    paynumber: 20,
    recivenumber: 10
}
let usertwo: bankmoney = {
    paynumber: 40,
    recivenumber: 30
}
let user: User = {
    name: "Muhammad Mutahir",
    number: 123,
    details: [userOne, usertwo]
}

// console.log(user)

// Extends

interface Matricstudents {
    name: string;

    age: number;
    rollNumber: number;
}

interface Interstudents extends Matricstudents {
    subject: number[];
}

let matricstudents: Matricstudents = {
    name: "Muhammad Mutahir",
    age: 10,
    rollNumber: 1
};

let interstudents: Interstudents = {
    age: 1,
    name: "Muhammad Ali",
    rollNumber: 23,
    subject: [12, 1]
};



function fooOne(a: number) {
    // console.log(a)
}
fooOne(12)


// Merge




interface Book {
    name: string,
    price: number
}

interface Book {
    size: number
}

const book: Book = {
    name: "Bio",
    price: 200,
    size: 100
}
// console.log(book, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>book")








// Union Types



function getThree(content: string | number[]) {
    // console.log(content.slice(0, 2))
}

getThree([1, 2, 3, 4, 5])


// Generics


function anyThing<Types>(arg: Types): Types {
    // console.log(arg)
    return arg
}
anyThing(["a", 1, true, { name: "Muhammad Mutahir" }])