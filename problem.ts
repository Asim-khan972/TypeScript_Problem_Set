
console.log(`problem-3`)

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

console.log("Upper Case :   "+PersonName.toUpperCase());

console.log("Lower Case :   "+PersonName.toLowerCase());


function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

console.log("Title Case : "+titleCase(PersonName));





