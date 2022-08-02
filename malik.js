// console.log("hello world");

// let age="twenty"
// age=55
// console.log(age);

// arrays

// let studentsNames = ["ali","asad","umar","aadil"]
// console.log(studentsNames);

// let studentsNames = ["ali","asad","umar","aadil"]
// studentsNames [5]='haadi'
// console.log(studentsNames);
// studentsNames.shift('ali')
// console.log(studentsNames);
// console.log(studentsNames.indexOf("aadil"));

// functions

// function findGrade(marks) {
//     if (marks > 60) {
//         console.log('you got ' + marks + '/100' + " marks and so you got 1st division in the paper")
//     }
//     else if (marks > 45) {
//         console.log('you got ' + marks + '/100' + " marks and so you got 2nd division in the paper")
//     }
//     else {
//         console.log('you got ' + marks + '/100' + " marks and so you are failed in the paper")
//     }
// }
// findGrade(75)

// function findScore(score) {
//     if (score < 30) {
//         console.log("bad");
//     }
//     else if (35 < score && score < 70) {
//         console.log("good");
//     }
//     else if (70 < score && score < 100) {
//         console.log("much better");         // issue
//     }
//     else {
//         console.log("awesome inning");
//     }
// }
// findScore(75)

// // Objetcs

// let user = {
//     firstName: "zubair",
//     lastName: "Ahmad",
//     profession: "developer",
//     living: {
//         city: "dehli",
//         country: "India"
//     },
//     interest: ["cricket", 'hockey', "music"],
//     fullname: function () {

// return this.firstName + " " + this.lastName

//     },

// }
// // console.log(user.interest[1]);

function myfun() {
  let a = document.getElementById("first").value;
  let b = document.getElementById("second").value;
  document.getElementById("result").innerHTML = a * b;
}

function myfun2() {
  let a = document.getElementById("first").value;
  let b = document.getElementById("second").value;
  document.getElementById("result").innerHTML = a / b;
}

function myfun3() {
  let a = document.getElementById("first").value;
  let b = document.getElementById("second").value;
  document.getElementById("result").innerHTML = a + b;
}

// function isEven(value) {
//     if (value % 2 == 0) {
//         console.log('its even number');
//     }
//     else {
//         console.log("its odd number");
//     }
// }
// // isEven(28);

// /**
//  *
//  * @param {*} number1 base number
//  * @param {*} number2 exponent number
//  * @returns
//  */
// function power(number1, number2) {
//     return console.log(Math.pow(number1, number2));;
// }
// // console.log(power(2,5));
// // power(2,5)

// /**
//  *
//  * @param {*} num1 1st number
//  * @param {*} num2 2nd number
//  * @param {*} num3 3rd number
//  * @returns
//  */
// function sumnumbers(num1, num2, num3) {
//     return console.log("The result is " + (num1 + num2 + num3))
// }
// // sumnumbers(25,35,45)

// let student = {
//     name: 'Ali',
//     occupation: 'farmer',
//     sons: ['asad', 'umar', 'aadil'],
//     brothers: [{
//         name: 'ahad',
//         age: '25'
//     },
//     {
//         name: 'zakir',
//         age: '34'
//     }
//     ]
// }

// // console.log(student.brothers);

//arithmetic operators

// console.log(25+45);
// console.log(25-45);
// console.log(25*45);
// console.log(25/45);
// console.log(55%45);

// let num=10
// console.log(num++);
// console.log(num);

// let num2=10
// console.log(num2--);
// console.log(num2);

// let value = 25
// value ++
// console.log(value);

// assignment operators

// let number=25
// number +=40
// console.log(number);

// let number2=125
// number2 -=40
// console.log(number2);

// let rupees=24
// rupees %=5
// console.log(rupees);

// let num=250;
// num *=2;
// console.log(num);

// let value=1e-4
// console.log(value);
// console.log(typeof value);

// let lightSpeed=18600
// lightSpeed=lightSpeed.toExponential()
// console.log(lightSpeed);

// let num=3.1425635
// num=num.toPrecision(4)
// console.log(num);

// let num=3.1425635
// num=num.toFixed(4)
// console.log(num);

// let myname = "sardar";
// let course = "javascript";
// let channel = "dev dreamer ";
// let info= myname + ' is learning ' + course + ' by the channel '+ channel
// console.log(info);
// let info2 = `${myname} is learning ${course} by the channel ${channel}`
// console.log(info2);

// string methods:

// let statement = "Pakistan is an atomic country";
// console.log(statement.toUpperCase());
// console.log(statement.indexOf ('s'));
// console.log(statement.length);
// console.log(statement.lastIndexOf('a'));
// console.log(statement.replace("atomic", "islamic"));
// console.log(statement.charAt(16));
// console.log(statement.slice(4,14));
// console.log(statement.startsWith('tan', 5))
// let date = new Date()
// console.log(date.getFullYear());

// let x=7
// console.log(
//     x===7
// );

// let y="7"
// console.log(
//     y===7
// );

// let x=7
// console.log(
//     x!==8
// );

// let x=7
// console.log(
//     x<=7
// );

// let x=7
// console.log(
//     x >= 7
// );

// let x=1
// let y=0

// if (x&&y){
//        console.log('helo');
// }

// let x = 1
// let y = 0

// logical operators

// if (x && !y) {
//     console.log('hellooooo');
// }

// let x = 1
// let y = 0

// if (x || y) {
// console.log('helloooo');
// }

//nullish coalescing operator vs || operator

// let game;
// let game2 = null;
// let game3 = 'cricket'
// console.log(game2 ?? game3);

// let score = 0
// console.log(score || "not registered");

// let score = 0
// console.log(score ?? "not registered");

// let myName="ali"
// let nameLength=myName.length;

// if(nameLength > 5 ){
//     console.log('a');
// }
// if(nameLength == 5){
//     console.log('b');
// }
// if(nameLength < 5){
//     console.log('c');
// }

// switch statement

// let roll = 4;
// switch (roll) {
//     case 1:
//         console.log("you rolled 1");

//     case 2:
//         console.log("you rolled 2");

//     case 3:
//         console.log("you rolled 3");

//     case 4:
//         console.log("you rolled 4");

//     case 5:
//         console.log("you rolled 5");

//         case 6:
//         console.log("you rolled 6");

// }

// let roll = 10;
// switch (roll) {
//     case 1:
//         console.log("you rolled 1");

//         break;
//     case 2:
//         console.log("you rolled 2");

//         break;
//     case 3:
//         console.log("you rolled 3");

//         break;
//     case 4:
//         console.log("you rolled 4");

//         break;
//     case 5:
//         console.log("you rolled 5");

//         break;
//         case 6:
//         console.log("you rolled 6");

//         break;
//     default:
//         console.log(`the number ${roll} is not possible`);
//         break;
// }

//if else statements

// let user1 = 'employe';
// if (user1 === 'guest') {
//     console.log('can not login');
// }
// else if (user1 === 'employe') {
//     console.log('u have logged in');
// }

//terniray conditional

// let age = 8;
// let message = age >= 18 ? "u can vote" : 'u can not vote'
// console.log(message);

// let roll = 4
// let result = roll <= 4 ? "not good" : "great"
// console.log(result);

// let passward = "ghi123";
// let msg = passward === "ghi123" ? "success" : "failed";
// console.log(msg);

//for loop

// for (let i = 0; i <= 15; i++) {
// console.log(i);
// }

// const persons = ['ali', 'usman', 'zahid', 'sajid', 'mushi', 'ahad']
// for (let i = 0; i < persons.length; i++) {
//     console.log(`How are you ${persons[i]}?`);

// }

//while loop

// let i = 0;
// while (i <= 10) {
// console.log(i);
// i++
// }

// let fruits = ['mango', 'apple', 'oranga', 'banana']
// let fru = 0
// while (fru < fruits.length) {
//     console.log(`${fruits[fru]}`);
//     fru++;
// }

// let students = ['ali', 'usman', 'zahid', 'sajid', 'mushi', 'ahad']
// let stdnts = 0;
// while (stdnts < students.length) {
// console.log(`${students[stdnts]}`);
//     stdnts++;
// }

//do while loop

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);

//Array Methods

// let countries = ['pakistan', 'india', 'england']
// countries[3] = 'australia'
// console.log(countries);

// let colors = ['red', 'green', 'blue', ['voilet', 'pink', 'orange']]
// console.log(colors[3][1]);

// console.log(colors[colors.length - 1][2]);

// let colors = ['red', 'green', 'blue', 'voilet', 'pink', 'orange']
// console.log(colors.indexOf('green'));
// // colors.p/
// let newColors = colors.concat('x', 'y', 'z')
// console.log(colors);
// console.log(newColors);

// console.log(colors.join(', '));

// let players = 'kohli, baber, rizwan, fakhar, stark, cummins, warner'
// console.log(layers.split(','));
// let players = ["kohli", " baber", " rizwan", " fakhar", " stark", " cummins", " warner"]
// let ausis = players.slice(4, 7);
// console.log(ausis);
// players.splice(5, 2, 'khawja', 'marsh')
// console.log(players);
// let players = [" kohli ", " baber", " rizwan", " fakhar", " stark", " cummins", " warner"]
// players.sort()
// console.log(players);

// let players = ["kohli", "baber", "rizwan", "fakhar", "stark", "cummins", "warner"]
// players.forEach(
//     function (value, index) {
//         console.log(`Mr ${value} has ${index} `);
//     }
// )

// let players = ["kohli", "baber", "rizwan", "fakhar", "stark", "cummins", "warner"]

// function upperCase(value) {
//     return value.toUpperCase();
// }

// let playersCap = players.map(upperCase)
// console.log(playersCap);

// let players = ["kohli", "baber", "rizwan", "fakhar", "stark", "cummins", "warner"]

// function upperCase(value) {
//     return value.toUpperCase();

// }

// let newPlayers = players.map(upperCase)
// console.log(newPlayers);

// let scores = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function double(value) {
//     return value * 2

// }
// newScores = scores.map(double)
// console.log(newScores);
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// let evenNumbers = numbers.filter(
//     function (value, index, array) {
//         return value % 2 === 0;
//     }
// )
// console.log(evenNumbers);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// function findOdd(value, index, array) {
//     return value % 2 === 1;
// }
// let oddNumbers = numbers.filter(findOdd)
// console.log(oddNumbers);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// function add(total, value) {
//     return total + value;
// }
// let sum = numbers.reduce(add)
// console.log(sum);

// for in loop:

//     let salaries = {
//         ali: 24000,
//         asad: 30000,
//         zahid: 25000,
//         zubair: 65000
//     }

// for (let i in salaries) {
//     console.log(`${i}: ${salaries[i]}`);
// }

// let salaries = {
//     ali: 24000,
//     asad: 30000,
//     zahid: 25000,
//     zubair: 65000
// }

// for (let i in salaries) {
//     console.log(`${i} has a salary of ${salaries[i]} rupees`);
// }
// for (let x in salaries) {

//     let result = (`${x} has a salary of ${salaries[x]} rupees`)
//     console.log(result);
// }

// for off loop:
//     let batsman = ['warner', 'khaja', 'babar', 'imam', 'finch', 'maxwell']
// for (i of batsman) {
//     console.log(i);
// }

// let person = 'Adnan'
// for (letter of person) {
//     console.log(letter);

// }

// for (letter in person){
//     console.log(letter);
// }

// let batsman = ['warner', 'khaja', 'babar', 'imam', 'finch', 'maxwell']

// for (i of batsman) {
//     if (i === 'imam') {
//         break;
//     } else {
//        console.log(i);
//     }
// }

// sets and weak sets:

// let batters = new Set()

// batters.add('warner')
// batters.add('finch')
// batters.add('khawaja').add('wade').add('lyon').add('baber')
// console.log(batters);
// let check = batters.has('lyon')
// console.log(check);
// // batters.clear()
// console.log(batters);
// batters.delete('wade')
// console.log(batters);

// let batsman = ['warner', 'khaja', 'babar', 'imam', 'finch', 'maxwell']

// let batters = new Set(batsman)

// console.log(batters);

// let nums = [1, 2, 3, 4, 5, 6]
// let weakSet = new WeakSet()
// weakSet.add(nums)

// console.log(weakSet);

//maps:

// let match = {
//     team: 'Pakistan',
//     score: 255,
//     vanue: 'rawalpindi'
// }

// let matchMap = new Map()
// matchMap.set('team', 'Pakistan');
// matchMap.set('score', 255);
// matchMap.set('vanue', 'rawalpindi').set('Date', '31 March');
// console.log(matchMap);
// console.log(matchMap.size)

//maps itration methods:

//keys():

// for (let key of matchMap.keys()) {
//     console.log(key);
// }

// values():

// for (value of matchMap.values()) {
//     console.log(value);
// }

// entries():

// for (let [k, v] of matchMap.entries()) {
//     console.log(`${k} has a value of ${v}`);
// }

// functions:

// function team() {
//     console.log('Pakistan');
// }
// team();

// let myTeam = function team() {
//     console.log('Pakistan');
// }
// myTeam();

// function findName(name) {
//     console.log(name);

// }
// findName("ali")

// function findName(name = 'please give your name here') {
//     console.log(name);

// }
// findName();

// function findName(name) {
//     if (name === undefined) {
//         console.log("give your name here");
//     } else {
//         console.log(`my name is ${name}`);
//     }

// }
// findName();

/**
 * 
 * @param {*} firstNumber first number to find average 
 * @param {*} secondNumber second number to find average 
//  */

// function findAvg(firstNumber, secondNumber) {
//     if (isNaN(firstNumber)) {
//         return 'put anumeric value'
//     }
//     else if(isNaN(secondNumber)){
//         return console.log('Please insert numeric value');
//     }else{
//         return (`The average of given numbers ${(firstNumber + secondNumber)/2}`)
//     }
// }
// console.log(findAvg('44',25));

// function findAverage() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i];
//     }
//     return (`The average of given numbers ${sum/arguments.length}`)
//   }
// console.log(findAverage(44,45,28,78,136));

// Questions:

// loops diifernce in use

// pimitives vs non primitives

// iternery vs if else

// arrays vs sets

// WeakSet differenc

// objects vs maps

// // let arr = [12,13,14,15,16]
// // // arr.push(17)
// // // arr.pop()
// // // arr.shift()
// // // arr.unshift(20)
// // let newNum = arr.filter((n) => {return n > 15})
// // console.log(newNum);
// // let newValu = arr.reduce((n1,n2) => n1 + n2)
// // console.log(newValu);
// // // console.log(arr);

// // function myName(name, callback) {
// //     console.log('Hi ' + name );
// //     callback();
// // }

// // function hello() {
// //     console.log('hello world');

// // }

// // myName('ali', hello)

// // const sumNum = (n1,n2, callback) => {
// //     console.log(n1 + n2);
// //     callback()
// // }

// // const findAvg = (n1,n2) => { console.log(); }

// let playerNames=['baber','rizwan','umar','shaheen', 'ali','zahid','imam']

// let findPlayerNames = playerNames.find((name)=>{return name.length === 4 })
// // console.log(findPlayerNames);

// let sortedPlayers=playerNames.sort()
// // console.log(sortedPlayers);
// // let player1= playerNames[0]
// // console.log(player1);
// // let player2= playerNames[1]
// // console.log(player2);

// let [player1, player2, ...myNewPlayers]= playerNames
// // console.log(myNewPlayers);
// let myMan=playerNames.slice(3,6)
// // console.log(myMan);

// let numbers = [1,2,3,4,15,6,7,18,9,10]
// numbers.sort((a,b)=> {return b - a})
// // console.log(numbers);
// // const isEven = (number) => { return number % 2 === 0 }
// let evenNumbers = numbers.filter((number) => { return number % 2 === 0 } )
// // console.log(evenNumbers)

// function isOdd(num) {
//     return num % 2 !== 0
// }

// let oddNumbers = numbers.filter(isOdd)
// // console.log(oddNumbers);

// let sum = numbers.reduce((acc, curr)=>{return acc + curr})
// // console.log(sum);

// let batsmans = [
//     {player: 'ali' , score: 25},
//     {player2: 'asad' , score : 105},
//     {player3: 'zahid' , score: 48}
// ]

// let findBatsman = batsmans.find((batter)=>{
//     return batter.player2 === 'asad'
// })

// // console.log(findBatsman);

// let lowToHigh = batsmans.sort((a,b)=>{
//     return a.score - b.score
// })
// // console.log(lowToHigh);

// let totalScore = batsmans.reduce((acc, curr)=>
// {return acc + curr.score}, 0)

// // console.log(totalScore);

// let scores=[25,36,145,95,12,45,36,78,25]

// findScores = scores.find((score)=>{return score === 45 })
// // console.log(findScores);
// // let sortedScores = scores.sort((a,b)=>{return a-b})
// // console.log(sortedScores);

// let filteredScores=scores.filter((score)=>{return score>50})
// // console.log(filteredScores);

// // let totalScores = scores.reduce((acc, curr)=>{return acc + curr})
// // console.log(totalScores);

// let playerScores=[25,45,56,88,57,25,54,62]
// let sortedScores = playerScores.sort((a,b)=> {return a-b})
// // console.log(sortedScores);

// let myScores=[25,45,56,88,57,25,54,62]

// let totalScores = myScores.reduce((acc,curr)=> {return acc + curr})
// console.log(totalScores);

// let result = myScores.map((score)=>
// {
//     return score*5
// }

// )
// // console.log(result);
// let score= 295;
// let news= score < 280 ? "Pak can win easily "
// :"its difficult to chase"

// console.log(news);

// let num=3
// switch (num) {
//     case 0:
//         console.log("you got 0");
//         break;
//         case 1:
//         console.log("you got 1");
//         break;
//         case 2:
//         console.log("you got 2");
//         break;
//         case 3:
//         console.log("you got 3");
//         break;

//     default: "repeat"
//         break;
// }
// let i=0
// while (i<10) {
//     console.log(i);
//     i++
// }
// // let i=5
// do {
//     console.log(i);
//     i++
// } while (i<12);

// console.log("hello world");



//obects in javascript
let playerInfo = {
  batter1: {
    score: 105,
    balls: 100,
    battingTime: 90,
  },
  batter2: {
    score: 45,
    balls: 50,
    battingTime: 40,
  },
  batter3: {
    score: 15,
    balls: 10,
    battingTime: 9,
  },
};

//adding field

playerInfo.batter4 = {
    score: 61,
    balls: 70,
    battingTime: 80,
  }

//updating field
playerInfo.batter2.score = 155;


// adding field method 2

playerInfo["batter5"] = {
  score: 59,
  balls: 78,
};

//using spread operator

playerInfo ={
    ... playerInfo,
    batter6:
    
    {
        score:88,
        balls:65
    }
}
playerInfo.batter2={
  ... playerInfo.batter2,
  
    age:25,
    dateOfBorth:"25 april 1998 " 
}






















