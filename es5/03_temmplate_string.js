const name = 'Sally';
const age = 34;
const pet = 'house';
console.log(greeting(name, age, pet));
console.log(greeting());

function greeting(name='', age = 0, pet='') {
    return `Your name's ${name}. Your age is ${age} year old. Your pet is ${pet}`;
}