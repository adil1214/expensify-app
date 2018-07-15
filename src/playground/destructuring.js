const person = {
  // name: 'Andrew',
  age: 33,
  location: {
    city: 'hungary',
    temp: 26,
  }
};

const { name: firstName = 'Anonymous', age } = person;
const { city, temp: temperature } = person.location;

console.log(`${firstName} is ${age}. `);

console.log(`it's ${temperature} in ${city} `);