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
