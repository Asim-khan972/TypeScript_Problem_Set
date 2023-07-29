console.log("problem-14");
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to 
// send out a new set of invitations. You’ll have to think of someone else to invite.
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
/// filter the guest who is not comming 
guestList = guestList.filter(function (person) { return person !== notCommingGuest; });
guestList.push(newGuest);
// Print invitations to each person
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nYou are invited to join us for dinner. The dinner will be a delightful gathering, and we would be honored to have your presence.\nLooking forward to\n   meeting you!\n\nBest regards,\n Asim khan"));
});
