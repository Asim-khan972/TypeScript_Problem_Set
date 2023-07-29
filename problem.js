console.log("problem-17");
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
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
//// we find index of notComming guest then make it replace it 
var indexofNotCommingGuest = guestList.indexOf(notCommingGuest);
console.log(indexofNotCommingGuest);
guestList[2] = newGuest;
// Print invitations to each person
guestList.forEach(function (person) {
    console.log(" ".concat(person));
});
