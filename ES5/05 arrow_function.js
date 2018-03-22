const a = 1;
const b = 2;

function add(a = 0, b = 0) {
    return a + b;
}
console.log(add(a, b));

const addd = (a, b) => { return a + b; };
console.log(addd(3,4));


