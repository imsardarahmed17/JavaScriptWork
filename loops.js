// nullish coalescing operator vs || operator

let game;
let game2 = null;
let game3 = 'cricket'
console.log(game2 ?? game3);

let score = 0
console.log(score || "not registered");

let score = 0
console.log(score ?? "not registered");

let x = 1
let y = 0

if (x || y) {
    console.log('helloooo');
}

// if else statements

let user1 = 'employe';
if (user1 === 'guest') {
    console.log('can not login');
}
else if (user1 === 'employe') {
    console.log('u have logged in');
}


//terniray conditional

let age = 8;
let message = age >= 18 ? "u can vote" : 'u can not vote'
// console.log(message);




// switch statement

let roll = 4;
switch (roll) {
    case 1:
        console.log("you rolled 1");

    case 2:
        console.log("you rolled 2");

    case 3:
        console.log("you rolled 3");

    case 4:
        console.log("you rolled 4");

    case 5:
        console.log("you rolled 5");

    case 6:
        console.log("you rolled 6");

}

// for loop:

for (let i = 0; i <= 15; i++) {
        console.log(i);
    }


    //for in loop:

let salaries={
    ali: 24000,
    asad: 30000,
    zahid: 25000,
    zubair: 65000
}

for (let i in salaries) {
    console.log(`${i}: ${salaries[i]}`);
}

//for of loop:

let batter = ['warner', 'khaja', 'babar', 'imam', 'finch', 'maxwell']

for (i of batter) {
        console.log(i);
}


let batsman = ['warner', 'khaja', 'babar', 'imam', 'finch', 'maxwell']

for (i of batsman) {
    if (i === 'imam') {
        break;
    } else {
        console.log(i);
    }
}


//while loop

let i = 0;
while (i <= 10) {
    console.log(i);
    i++
}

//do while loop

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);