A. The basics

1. for (let i = 0; i <= 10; i++){
    console.log(i)
}

2. for (let i = 10; i <= 400; i++){
    console.log(i)
}

3. for (let i = 12; i <= 4000; i+=3){
    console.log(i)
}
----------------------------------------------
B. Get even

1.for (let i = 1; i < 100; i++){
    console.log(i) 
}

2. for (let i = 1; i < 100; i++){
    if ( i % 2 === 0){
        console.log( (i) + " is an even number")
    }
}
--------------------------------------------------
C. Give me Five

1. for (let i = 0; i <= 100; i++) {
    if ( i % 5 === 0){
        console.log( "I found " + (i) + " ." + " High Five!")
    }
}



2. for (
    

) {
    if ( i % 5 === 0 && i % 3 === 0)
    {
        console.log( "I found " + (i) + "." + " High Five!" + " Three is a crowd" )
    }  
}


-------------------------------------------
D. Savings account

1. const bank_account = (...numbers) => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}
console.log(bank_account(1,2,3,4,5,6,7,8,9,10))

2. let bank_account = 0 
for (let i = 1; i <= 100; i++){
    bank_account = bank_account + i * 2
}
console.log(bank_account)