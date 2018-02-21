// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function sanitizeString (string) {
  return string.replace(/[^\w]/g, "").toLowerCase();
}

function checkIfObjectContains(one, two){
   for (var i in one) {
           if (! two.hasOwnProperty(i) || one[i] !== two[i] ) {
              return false;
           }
   }
   return true;
}

function anagrams(stringA, stringB) {
  const A = sanitizeString(stringA);
  const B = sanitizeString(stringB);
  var obj1 = {};
  var obj2 = {};

  for (let char1 of A) {
    obj1[char1] = obj1[char1] + 1 || 1;
  }
  for (let char2 of B) {
    obj2[char2] = obj2[char2] + 1 || 1;
  }

  return Object.keys(obj1).length > Object.keys(obj2).length ? checkIfObjectContains(obj1, obj2) : checkIfObjectContains(obj2, obj1)
}

anagrams('RAIL! SAFETY!', 'fairy tales')

module.exports = anagrams;
