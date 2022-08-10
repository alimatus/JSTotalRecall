A.Talk about it:
What are the things in an array called ?
    -Data elements 

Do Arrays guarantee those things will be in order ?
    -no  

What real - life thing could you model with an array ?
    - storage container

---------------------------

    B.Easy Does It

const quotes = [' live, laugh, love', 'cest  la vie', ' just do it!']

------------------------------
    C.Accessing elements

How do you access the 1st element in the array ?

    randomThings[0]

Change the value of "Hello"to "World"

randomThings[2] = "World"


Check the value of the array to make sure it updated the array.How ? Why, yes! console.log();

const randomThings = [1, 10, "Hello", true]
randomThings[0]
randomThings[2] = "World"
console.log(randomThings)

--------------------------
    D.Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

What would you write to access the 3rd element of the array ?

    ourClass[2]

Change the value of "Github" to "Octocat"

ourClass[4] = 'Octocat'

Add a new element, "Cloud City" to the array

ourClass.push("Cloud City")


----------------------------------------------
    E.Mix It Up

const myArray = [5, 10, 500, 20]

Add the string "Aegon"to the end of the array.Add another string of your choice to the end of the array.

1. myArray.push("Aegon", "Cat")

2. myArray.shift()

3. myArray.unshift("Bob Marley")

4. myArray.pop()

5.  myArray.reverse()
Array.prototype.reverse() did not work nor mutate the array
myArray.reverse() worked & yes we did mutate the array by having the output in reverse order. 
Mutate means to changeto different form.


---------------------------------------

    F.Biggie Smalls

let interger;
interger = 56
if (interger < 100) {
    console.log('little number')
}
else if (interger >= 100) {
    console.log('big number')
}

-----------------------------------------------
    G.Monkey in the Middle


let interger;
interger = 1
if (interger < 5) {
    console.log('little number')
}
else if (interger > 10) {
    console.log('big number')
}

else { console.log('monkey') }


-----------------------------------------------
    H.What's in Your Closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

1. console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

2. kristynsCloset.splice(6, 0, "raybans")

3. kristynsCloset[5] = "stained knit hat"

4. console.log(tomhsCloset[0][0])

5. console.log(tomhsCloset[1][0])

6. console.log(tomhsCloset[2][0])

7. console.log(` Thom is looking fierce in ${tomhsCloset[0][0]}  ${tomhsCloset[1][0]} and ${tomhsCloset[2][0]} `)

8. tomhsCloset [3][2]= "Footie Pajamas"