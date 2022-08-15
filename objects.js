A. Make a user object


const user = {
name: 'Sky'
email: 'sky@live.com'
age: 89
purchased: []
}



///////////////////////////////
B. Update the user

const user = {
    name: 'Sky'
    email: 'sky@live.com'
    age: 89
    purchased: []
    }

    user.email = 'sky1@live.com'

    console.log(user)



    //////////////////////////////

    C. Adding keys and values

    const user = {
        name: 'Sky',
        email: 'sky@live.com',
        age: 89,
        purchased: []
        }

        user.location = "New York"
console.log(user)

////////////////////////////////////
D. Shopaholic!


1. const user = {
    name: 'Sky',
    email: 'sky@live.com',
    age: 89,
    purchased: []
    }

    user.purchased.push('carbohydrates')

    





    2. 
    const user = {
        name: 'Sky',
        email: 'sky@live.com',
        age: 89,
        purchased: []
        }
    
        user.purchased.push('peace of mind')



 3.
 const user = {
    name: 'Sky',
    email: 'sky@live.com',
    age: 89,
    purchased: []
    }

    user.purchased.push('Merino jodhpurs')



4.

console.log (user.purchased[2])



////////////////////////////////////////
E. Object-within-object

1. const user = {
    name: 'Sky',
    email: 'sky@live.com',
    age: 89,
    purchased: []
    }

    user.friend = {
        name: [],
        age: [],
        location:[] ,
        purchased: []
    }


2. 
const user = {
    name: 'Sky',
    email: 'sky@live.com',
    age: 89,
    purchased: []
    }

    user.friend = {
        name: [],
        age: [],
        location:[] ,
        purchased: []
    }

    user.friend.name = "Emily "

    console.log(user.friend.name)



3. 
const user = {
    name: 'Sky',
    email: 'sky@live.com',
    age: 89,
    purchased: []
    }

    user.friend = {
        name: [],
        age: [],
        location:[] ,
        purchased: []
    }

    user.friend.location = "Paris"

    console.log(user.friend.location)

4.
const user = {
    name: 'Sky',
    email: 'sky@live.com',
    age: 89,
    purchased: []
    }

    user.friend = {
        name: [],
        age: [],
        location:[] ,
        purchased: []
    }

    user.friend.age = "55"

    console.log(user.friend.age)



    5.
    const user = {
        name: 'Sky',
        email: 'sky@live.com',
        age: 89,
        purchased: []
        }
    
        user.friend = {
            name: [],
            age: [],
            location:[] ,
            purchased: []
        }

        user.friend.purchased.push("The One Ring")



6. user.friend.purchased.push('A latte')


7. console.log(user.friend.purchased[1])