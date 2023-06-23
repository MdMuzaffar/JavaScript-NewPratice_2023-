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

//Merging Objects

const drinks1 = {
    id: '12m12a',
    name: 'Orange',
}
const price1 = {
    half: 100,
    full: 150,
}

const quantity = {
        Qtr: 250,
        Half: 500,
    }
    // const mergeDrink = Object.assign({}, drinks1, price1, quantity);
    // const mergeDrink1 = Object.assign({}, drinks1, { price1 }, { quantity });

// use Spread Operators
const mergeSpread = {...drinks1, ... { price1 }, ... { quantity } }
    // console.log(drinks1, price1)
    // console.log('view Merge output' + ' ' +
    //     mergeDrink1);

// console.log(
//     mergeDrink1);
// console.log(
//     mergeDrink);

console.log(mergeSpread)

console.log('-------------Imperative Programming-----------------------------------')

const car = {};
car.make = 'Honda';
car.model = 'Civic';
car.drive = function() {
    console.log('Drive a car' + ' ' + this.make + ' ' + this.model)
}
car.drive();

//output Drive a car Honda Civic

console.log('-------------Declarative Programming-----------------------------------')

class Transport {
    constructor(make, model) {
        this.makes = make;
        this.models = model;
    }
    drives() {
        console.log('Driving the ' + this.makes + ' ' + this.models);
    }
}

const transport = new Transport('Honda', 'Verna');
transport.drives()


//--------------map-------------------------

const nameUpdateMapped = [
    { id: 1, name: 'Muzaffar', Studies: 'Bcom' },
    { id: 2, name: 'Afsar', Studies: 'BSC' },
    { id: 3, name: 'Zafar', Studies: 'SSC' },
];

// const nameUpdateMap = ItemsMap.map((items) => {
//     if (items.name === 'Muzaffar') {
//         return {
//             ...items,
//             name: items.name = 'developer',
//         }
//     }
//     return items;
// })
// console.log(nameUpdateMap);

const nameUpdateMap = nameUpdateMapped.map((items) => {
    if (items.name === 'Muzaffar') {
        return {...items,
            name: items.name = 'Developer',
        }
    };
});
console.log(nameUpdateMap);