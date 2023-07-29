
console.log(`problem-17`)
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.






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

//method 
 //// we find index of notComming guest then make it replace it 
 let indexofNotCommingGuest =  guestList.indexOf(notCommingGuest);
console.log(indexofNotCommingGuest);
guestList[2]=newGuest;

// method 2
                
// guestList = guestList.map((person) => (person === notCommingGuest ? newGuest : person));s



// Print invitations to each person
guestList.forEach((person) => {
  console.log(` ${person}`);
});

