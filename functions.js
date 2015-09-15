// Let's practice functions 

// 1. This function takes two strings, and returns a value that sort can use to determine which is the longest string

function compare(a, b) {
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

var longestString = ["hi", "hello"];
longestString.sort();

// 2. sort name by length, e-mail by alphabetical order

var nameEmail = [
    {name:"Max", email:"max.wolpert@gmail.com"},
    {name:"Shona", email:"shona.michelle@gmail.com"},
    {name:"Jacob", email: "jacob.emmanuel@icloud.com"},
    {name:"Sven", email: "sven.ga.wolpert@gmail.com"},
    {name:"Jayne", email: "jlemonartz@gmail.com"}
]

     var sortByNameLength = nameEmail.sort (function(a,b) {
   if (a.name.length < b.name.length) {
        return -1;
   }
   if (a.name.length > b.name.length) {
       return 1;
   }
    // a must be equal to b
   return 0;
    }); // used similar syntax to first exercise. Will sort by name length
    
    
 function emailAlphabetical(a, b) {
    if (a.email > b.email) {
        return 1;        
    }
    if (a.length < b.length) {
        return -1;
    }
    return 0;
};

nameEmail.sort(emailAlphabetical);
 // will sort by alphabetical order of e-mail addresses
 
 // 3. using Array.prototype.map, function will take a number adn return its square
 
 var numbers = [9, 16, 64, 81];
 
 function squareRoots(num) { // created a function called squareRoots that will take a number as parameter
   return Math.sqrt(num);
}

var rootArray = numbers.map(squareRoots); // map creates a new array that applies the function (squareRoots) on each element

// 4. This function will take an object and square its “num” property
 
 var cities = [
    {city:"London", num:100},
    {city:"Tokyo", num:4},
    {city:"Paris", num:25}
  ]

var squareMe = cities.map(function(obj) {
   var someObjects = {};
    someObjects["num"] = obj.num * obj.num;
    return someObjects;
}); // This removes the name property... Not necessary?