A. printGreeting

let printGreeting = ( name ) => {
    return (`hello there ${name}`)
} ;

console.log(printGreeting("Slimer"));



////////////////////////////////////////

B. printCool

let printCool = ( name ) => {
    return (` ${name} is cool`)
} ;

console.log(printCool("Joe"));


////////////////////////////////////////

C. calculateCube

let calculateCube = ( x ) => {
    return ( x*x*x )
} ;

console.log(calculateCube(5));

/////////////////////////////////
D. isVowel

let isVowel = (char)  => {
    char = char.toUpperCase()
    if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
      return true
    } else {
      return false
    }
  }
  console.log(isVowel('e'))




////////////////////////////////////
E. getTwoLengths

let getTwoLengths = ( name, age ) => {
    return [name.length, age.length]
} ;

console.log(getTwoLengths("Hank", "Hippopopalous"));

////////////////////////////////////

F. getMultipleLengths

let getMultipleLengths = ( words ) => {
   let lengthsArray = [] 
   for ( let word of words){
    lengthsArray.push(word.length)
   }
   return lengthsArray
} ;

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


//////////////////////////////////
G. maxOfThree

let maxOfThree = (x,y,z) => {
    return Math.max( x,y,z)
}
console.log(maxOfThree(6, 9, 1));


/////////////////////////////////////
H. printLongestWord

let names = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]

const printLongestWord = (words) => {
let longestWord = ' ';
let longestNum = 0;
for ( let word of words){
    if (word.length > longestNum) {
        longestWord = word;
        longestNum = word.length;
    }
}
  return longestWord;
}
console.log(printLongestWord (names))


