
console.log(`problem-13`)
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements
//  about these items, such as “I would like to own a Honda motorcycle.”

// Array of favorite cars
const favoriteCars: string[] = [
  "Tesla Model S",
  "Porsche 911",
  "Audi R8",
  "BMW M3",
  "Mercedes-Benz AMG GT",
];

// Print statements about each car
favoriteCars.forEach((car) => {
  console.log(`I would like to own a ${car}.`);
});



