function isPalindrome(word) {
  // Write your algorithm here
  const wordReversed = reversingString(word);

  if (word === wordReversed){
    return true;
  }else{
    return false;
  }
}
const reversingString = (word)=>{
  const wordArray =  word.split('');

  //Reversing the array
  const reversingWordArray = wordArray.reverse();

  //using the reversed array to create as string
  const reversedWord = reversingWordArray.join('');

  return reversedWord;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
