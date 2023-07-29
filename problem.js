console.log("problem-17");
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
// Array of people to invite to dinner
var guestList = [
    "Mia Khalifa",
    "Leah Gotti",
    "Nora Fatihe",
];
//// the person who is not comming 
var notCommingGuest = 'Nora Fatihe';
/// here is new guset 
var newGuest = 'Sunny Leone ';
//// new guest 
var endGuest = "Angela White";
var MiddleGuest = "Lana Rose ";
// method 2
guestList = guestList.map(function (person) { return (person === notCommingGuest ? newGuest : person); });
guestList.unshift("Jhony Bhaiaa");
guestList.push(endGuest);
//// middle element into array 
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, MiddleGuest);
// Print invitations to each person
guestList.forEach(function (person) {
    console.log(" ".concat(person));
});
