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