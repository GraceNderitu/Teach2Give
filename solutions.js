//Design a function that reverses the digits of an integer. For example, 50 //should become 5 and -12 should become -21.

function reverseInteger(num) {
    // Convert the number to a string
    let numStr = num.toString();
    // Check if the number is negative
    let isNegative = num < 0;
    if (isNegative) {
      numStr = numStr.substring(1);
    }
    let reversedStr = numStr.split('').reverse().join('');   // Reverse the string
    let reversedNum = parseInt(reversedStr);   // Convert the string back to a number
    // Add the negative sign back if the original number was negative
    if (isNegative) {
      reversedNum = -reversedNum;
    }
     return reversedNum;
  }
  console.log(reverseInteger(50)); //5
  console.log(reverseInteger(-67)); //-76


//Write a recursive function to calculate the factorial of a number

function factorial(n) {
        if (n === 0||n === 1) { //base case
        return 1;
        }
        return n * factorial(n - 1);
    }
    console.log(factorial(5)); //120
    console.log(factorial(1)); // 1
  

//Design a function that takes a string or sequence of characters as input and // returns the character that appears most frequently.Eg 11189 => '1 hello => l
    
function mostFrequentChar(input) {
        // Create a frequency map
        const frequencyMap = {};
         // Iterate through each character in the input
        for (let char of input) {
          if (frequencyMap[char]) {
            frequencyMap[char]++;
          } else {
            frequencyMap[char] = 1;
          }
        }
         // Find the character with the highest frequency
        let maxFrequency = 0;
        let mostFrequent = '';
        
        for (let char in frequencyMap) {
          if (frequencyMap[char] > maxFrequency) {
            maxFrequency = frequencyMap[char];
            mostFrequent = char;
          }
        }
         return mostFrequent;
      }
      console.log(mostFrequentChar('11189'));  // Output: '1'
      console.log(mostFrequentChar('hello'));  // Output: 'l'
      console.log(mostFrequentChar('abracadabra'));  // Output: 'a'
     
      
//Design a function that determines whether a given string is a pangram. A pangram is a sentence or phrase containing every letter of the alphabet at
//east once. Punctuation and case are typically ignored. For example, the string "The quick brown fox jumps over the lazy dog" is a pangram, while
//"Hello, world!" is not.

function isPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const strLower = str.toLowerCase();
    for (let char of alphabet) {
      if (!strLower.includes(char)) {
        return false;
      }
    }
    return true;
  }
    console.log(isPangram('The quick brown fox jumps over the lazy dog')); //true
    console.log(isPangram('Hello, world!')); //false


//Design a function that takes a list of integers as input. The function should return True if the list contains two consecutive threes (3 next to a 3) anywhere
//within the list. Otherwise, it should return False. For example, the function should return True for [1, 3, 3] and False for [1, 3, 1, 3].

function hasConsecutiveThrees(arr) {
     for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === 3 && arr[i + 1] === 3) {
        return true;
      }
    }
    return false;
  }
  console.log(hasConsecutiveThrees([1, 3, 3]));  // Output: true
  console.log(hasConsecutiveThrees([3, 3, 1, 3]));  // Output: true
  console.log(hasConsecutiveThrees([1, 3, 1, 3]));  // Output: false
  
 
//Master Yoda, a renowned Jedi Master from the Star Wars universe, is known for his unique way of speaking. He often reverses the order of words in his
//sentences. For example, instead of saying "I am home" he might say "Home am I" Design a function that takes a sentence as input and returns a new
//sentence with the words reversed in the same order that Master Yoda would use.

function masterYoda(sentence) {
    const words = sentence.split(' '); //split the sentence into words
    const reversedWords = words.reverse(); //reverse the order of the words
    return reversedWords.join(' '); //join the words back together
  }
    console.log(masterYoda('I am home'));  // Output: 'home am I'
    console.log(masterYoda('Hello there'));  // Output: 'there Hello'