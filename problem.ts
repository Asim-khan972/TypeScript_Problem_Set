
console.log(`problem-16`)
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name 
// of the guest who can’t make it.




// Array of people to invite to dinner
let guestList: string[] = [
  "Mia Khalifa",
  "Leah Gotti",
  "Nora Fatihe",
];
//// the person who is not comming 
 let notCommingGuest :string = 'Nora Fatihe';

 /// here is new guset 
 let newGuest :string = 'Sunny Leone ';

   /// filter the guest who is not comming 
  guestList = guestList.filter((person)=>person !== notCommingGuest)

  guestList.push(newGuest);

// Print invitations to each person
guestList.forEach((person) => {
  console.log(`Dear ${person},\nYou are invited to join us for dinner. The dinner will be a delightful gathering, and we would be honored to have your presence.\nLooking forward to
   meeting you!\n\nBest regards,\n Asim khan`);
});

console.log(`Unfortunately, ${notCommingGuest} can't make it to the dinner.`);
