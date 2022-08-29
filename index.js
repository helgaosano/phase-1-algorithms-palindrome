function isPalindrome(word) {

  const orginalWord = word;
   let splittedWord = word.split("");
   let reversedWord = splittedWord.reverse();
   let newWord = reversedWord.join("");

   if(orginalWord === newWord){
     return true;
   }
   else{
     return false;
   }
}
isPalindrome("racecar");

/* 
  Add your pseudocode here

  Define a variable to store a copy of word
  Split word to make it an array using the .split("") method
  .reverse() method applied to reverse the array
  .join("") method applied to return the reversed array into a string
*/


/*
  Add written explanation of your solution here

  If the reversed string "newWord" is equal to the initial string "originalWord" the fuction 
  returns true otherwise it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
