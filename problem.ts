
console.log(`problem-18`)
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying 
// that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop 
// a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure
//  you actually have an empty list at the end of your program.




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

 //// new guest 
 let endGuest = "Angela White";
 let MiddleGuest= "Lana Rose ";


// method 2
                
guestList = guestList.map((person) => (person===notCommingGuest?newGuest:person));

guestList.unshift("Jhony Bhaiaa");
guestList.push(endGuest);

//// middle element into array 

let middleIndex = Math.floor(guestList.length/2);

guestList.splice(middleIndex,0,MiddleGuest);



// Print invitations to each person
guestList.forEach((person) => {
  console.log(` ${person}`);
});



///// 18 


while(guestList.length>2){
    let popName = guestList.pop();
    console.log(`${popName}     :  : sorry your invitation is cancel due to some issues `)
}

guestList.forEach((person) => {
  console.log(` ${person}`);
});


/// getting an empty array 
while(guestList.length>0){
    let popName = guestList.pop();
    console.log(`${popName}     :  : sorry your invitation is cancel due to some issues `)
}

  console.log(`empty:  ${guestList}`);
