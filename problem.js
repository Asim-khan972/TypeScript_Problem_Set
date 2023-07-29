// Personal Message: Store a person’s name in a variable, and print a message to that person.
//  Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var PersonName = "asim khan";
console.log("problem-2 ");
console.log("heloo ".concat(PersonName, "   would you like to learn some Python today?"));
console.log("problem-3");
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("Upper Case :   " + PersonName.toUpperCase());
console.log("Lower Case :   " + PersonName.toLowerCase());
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
titleCase(PersonName);
console.log("Title Case : " + titleCase(PersonName));
