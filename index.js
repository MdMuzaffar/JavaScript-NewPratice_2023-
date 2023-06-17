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

//Property and Value checking

const drink = {
    id: '12m12a',
    name: 'Muzaffar',
    price: {
        half: 100,
        full: 150,
    }
}

// Values existing
if (drink.id) {

    console.log(drink.id)
}
//Imperative way
for (const prop in drink) {
    if (drink[prop] === 'Muzaffar')
        console.log(drink[prop])
}

//Declarative way

console.log(Object.values(drink).includes('Muzaffar'));

//Property existing

//Adding and updating Object property

const drinks = {
    id: '12m12a',
    name: 'Orange',
    price: {
        half: 100,
        full: 150,
    }
}

function propUpdate(prop, value) {
    drinks[prop] = value;
}

propUpdate('name', 'mango');

console.log(drinks)

//Remove object property
// delete drinks.id;
drinks.id = undefined;

if (drinks.id) {
    console.log('Has a id.....')
}

console.log(drinks.hasOwnProperty('id'));

const { price, ...rest } = drinks;
console.log(price, rest, drinks)