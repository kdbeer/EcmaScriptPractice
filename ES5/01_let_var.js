console.log('declare by using \'var\'')
console.log('---------------------------')
// const player = 'Bobby';
// let experience = 100;
// var wizardLevel = false;

// if (experience > 90) {
//     var wizardLevel = true;
//     console.log('Inside ', wizardLevel);
// }

// console.log('outside ', wizardLevel);

// -- Output --
// inside true
// inside true

console.log('declare by using \'let\'')
console.log('---------------------------')
const player = 'Bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('Inside ', wizardLevel);
}

console.log('outside ', wizardLevel);

// -- Output --  
// Inside  true 
// outside  false

const obj = {
    player: 'Bobby',
    level: 1,
    class: 'wizard'
}

// obj = {
//     player: 'Bobby',
//     level: 2,
//     class: 'wizard'
// }

//  -- Output --
// TypeError: Assignment to constant variable.

obj.level = 2;
console.log(obj);
// ~~ Output ~~
// { player: 'Bobby', level: 2, class: 'wizard' }
// Keep in mine, Attibute in object can chang!!

const playerName = obj.player;
const playerLevel = obj.level;
const playerClass = obj.class;

console.log(playerName);
console.log(playerLevel);
console.log(playerClass);
// ~~ Output ~~
// Bobby
// 2
// wizard

const { pName, pLevel, pClass } = obj;
console.log(pName);
console.log(pLevel);
console.log(pClass);
// ~~ Output ~~
// undefined
// undefined
// undefined



