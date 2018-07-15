//
// ARRAY DESTRUCTURING
//


// street, city, state, zip
const address = ['1345 s senior street', 'Pheladilphia', 'Penselvenya', '19874'];

// you can set up defaults like in object destructuring.
// const [street, city, state, zip] = address;
const [, , state = 'New york'] = address;

console.log(`You are in ${state} .`);





























// =========================================================
// OBJECT DESTRUCTURING
//

// const person = {
//   // name: 'Andrew',
//   age: 33,
//   location: {
//     city: 'hungary',
//     temp: 26,
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${firstName} is ${age}. `);

// console.log(`it's ${temperature} in ${city} `);