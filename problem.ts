
console.log(`problem-14`)
// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.



// Array of people to invite to dinner
const guestList: string[] = [
  "Awais",
  "Juniad",
  "Nora Fatihe",
];

// Print invitations to each person
guestList.forEach((person) => {
  console.log(`Dear ${person},\nYou are invited to join us for dinner. The dinner will be a delightful gathering, and we would be honored to have your presence.\nLooking forward to
   meeting you!\n\nBest regards,\n Asim khan`);
});


