import { Employee } from './class';


let newObj = new Employee();
let fname = 'Praful';

let lname: string;

console.log(fname);

let age: number;

let isValid: boolean = false;

console.log(isValid);

let emp: any;

emp = 'test';
emp = 10;
emp = true;
emp = ['test', 'test1'];

// union type
let empl: string | string[] | number | number[];

empl = 'test';
empl = ['test'];


function results() {
    let a = 10;
    let b = 'test';
    return [a, b]; // tuples
}

// Array destructuring
let [a, b] = results();

console.log(a, b);

// let names = [];

let names: string[] = ['name1', 'name2'];

let nameresult = names.find((name) => name === 'name1');

let nameResults = names.filter((name) => name === 'name1');

for (const name of names) {
    console.log(name);
}

const pi = 4.13;


enum Color {
    Red,
    Green,
    Blue
}

let userColor = Color.Red;
