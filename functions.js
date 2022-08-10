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

let isVowel = function => {

    let vowels = [ "a", "e", "i", "o", "u"]

     if (letter === i) {
    return  true  }
    else {
    return false }
};

console.log(isVowel("w"));


////////////////////////////////////
E. getTwoLengths

let getTwoLengths = ( name, age ) => {
    return [name.length, age.length]
} ;

console.log(getTwoLengths("Hank", "Hippopopalous"));

////////////////////////////////////

F. getMultipleLengths

let getMultipleLengths = ( name ) => {
    return name.lenght
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

let printLongestWord = ( names ) => {
    return findlongestword(names)
}
console.log(printLongestWord("BoJack"));