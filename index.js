function makeNumber(...params) {
    const total = params.reduce((prev, next) => prev + next);
    return total;
}
const totalNumber = makeNumber(11, 22, 33, 44);
console.log(`Total: ${totalNumber}`)


function makeCarPartId(id) {
    const theId = `CAR_PART_${id}`;
    return function(name) {
        return `${theId}_${name.toUpperCase()}`;
    }
}
// asdfaa
// Function Return and Scope
const carPartName = makeCarPartId('A8A9A7');
console.log(carPartName('left door'));
const carPartName1 = makeCarPartId('A8A9A8');
console.log(carPartName1('right door'));

// Immediate - Invoke function expression

const carPartId = (function(id) {
    const theId = `CAR_PART_${id}`
    return function(name) {
        return `${id}_${name}`
    }
})('Ford');

console.log(carPartId('Left Door'))
console.log(carPartId('Right Door'))