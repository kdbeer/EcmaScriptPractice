const name = 'John Snow';
const obj = {
    [name]: 'hello',
    ['Ray' + ' Smit']: 'hihi'
}
console.log(obj);
// ~~ Output ~~
// { 'John Snow': 'hello', 'Ray Smit': 'hihi' }

const obj2 = {
    [name]: 'Hello',
    [1 + 2]: 'hihi'
};
console.log(obj2);
// ~~ Output ~~
// { '3': 'hihi', 'John Snow': 'Hello' }

// If property and name are the same
const player_name = 'KDBEER';
const player_level = 99;
const player_class = 'Knight';
const player = {player_name, player_level, player_class };
console.log(player);
// ~~ Outout ~~
// { player_name: 'KDBEER',
//   player_level: 99,
//   player_class: 'Knight' }
