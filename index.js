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

// console.log(mergeSp 

//output Drive a car Honda Civic

// console.log('-------------Declarative Programming-----------------------------------')

// class Transport {
//     constructor(make, model) {
//         this.makes = make;
//         this.models = model;
//     }
//     drives() {
//         console.log('Driving the ' + this.makes + ' ' + this.models);
//     }
// }

// const transport = new Transport('Honda', 'Verna');
// transport.drives()


//--------------map-------------------------

// const nameUpdateMapped = [
//     { id: 1, name: 'Muzaffar', Studies: 'Bcom' },
//     { id: 2, name: 'Afsar', Studies: 'BSC' },
//     { id: 3, name: 'Zafar', Studies: 'SSC' },
// ];

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

// const nameUpdateMap = nameUpdateMapped.map((items) => {
//     if (items.name === 'Muzaffar') {
//         return {...items,
//             name: items.name = 'Developer',
//         }
//     };
// });
// console.log(nameUpdateMap);

// varMap.map((a) => {
//     if (a.value === 10) {
//         return {
//             ...a,
//             value: a.value = 20,
//         }
//     }
//     return a;
// })


// -----------------------for each----------------------

const items = [
    { id: 10, make: 'toyota', model: 'crista', price: 1000 },
    { id: 11, make: 'honda', model: 'civic', price: 4000 },
    { id: 12, make: 'maruti', model: 'suzuki', price: 2000 }
];

// items.forEach()

// items.forEach((a) => {
//     console.log(a.model, a.id, (a.price / 2).toFixed(2), )
// });
// const forEachNumber =
// console.log(forEachNumber);

// const numbersAdd = [3, 4, 55, 66];
// let sum = 0;

// numbersAdd.forEach(num => {
//     sum += num;
// });
// console.log(sum);

// items.map() USE TO RETERN THE SPECIFIC PROPERTY FROM THE ARRAY

// const itemsMapped = items.map((e, i) => {
//     if (e.price >= 1000)
//         return e.model
// })

// console.log('Mapped Value ' + '' + itemsMapped);

const newMake = items.map((e) => {
    if (e.id === 10) {
        return {...e,
            model: 'innova',
        }
    }
    return e
})

// console.log(newMake);
// console.log(items);

// items.map() IMPERATIVE WAY

const halfOfPrice = [];

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.id === 10) {
        halfOfPrice.push({
            ...item,
            price: item.price / 2
        })
    } else {
        halfOfPrice.push(item)
    }
}

const halfPrice = [];

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.id === 11) {
        halfPrice.push({...item, price: item.price / 2 })
    } else {
        halfPrice.push(item)
    }
}
// console.log(halfPrice);

// console.log(halfOfPrice)




const makeVar = [];
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.id === 12) {
        makeVar.push({...items, price: item.price / 2 })
    } else {
        makeVar.push(item);
    }
}

// console.log { 'testing' }
// console.log('Has a id.....')
// console.log('Has a id.....' + '$makeVar')
// console.log(makeVar)