// let batsmanScores = [25,24,35, 36, 49,100, 78, 25, 145];

// let checkScore = batsmanScores.includes(25);
// console.log(batsmanScores);

// let findScore = batsmanScores.find((score) => score > 40);

// console.log(findScore);

// let batsmans = [
//   { name: "baber", score: 155 },
//   { name: "rizwan", score: 55 }
// ];
// let findBatsman = batsmans.find((batsman)=> batsman.name === "baber")
// console.log(findBatsman);

// let sortedScoresInAscending = batsmanScores.sort((a,b)=>a-b)
// console.log(sortedScoresInAscending);

// let sortedScoresInDescending = batsmanScores.sort((a,b)=>b-a)
// console.log(sortedScoresInDescending);

// let slicedScores = batsmanScores.slice(1,4)
// console.log(slicedScores);

// // let result = batsmanScores.every((score)=> score >120)
// let result = batsmanScores.some((score)=> score >120)
// console.log(result);

// let isEven = batsmanScores.map((score)=> score % 2 === 0)
// console.log(isEven);
// let isOdd = batsmanScores.map((score)=> score % 2 !== 0)
// console.log(isOdd);

// let reversedScores = batsmanScores.reverse()
// console.log(reversedScores);
// console.log( batsmanScores.at(4))

// console.log(batsmanScores.indexOf(49));
// let totalScores=batsmanScores.reduce((acc,curr)=> acc+curr)
// console.log(totalScores);

let studentsMarks = [25,45,69,78,35,56,41]
// for (let marks = 0; marks < studentsMarks.length; marks++) {
//     const element = studentsMarks[marks];
//     console.log(element);
// }
// let passward="abc25"

// if (passward === "abc25" ) {
//     console.log("you have logged in");
// } else{
//     console.log("try a different passward please");
// }
// if (condition) {
    
// } 
// studentsMarks.map((mark)=>console.log(mark))

// let numbers=68;
// if (numbers > 80) {
//     console.log("you got A-grade");
// } else if(numbers< 50){
//     console.log("you failed");
// } 
// else {console.log("you passed the exam");}

// console.log("loops");
// let num = 20
// while (num > 0) {
//     console.log(num);
//     num --
// }
let val = 0;
do {
    console.log(val);
    val++;
} while (val < 10);

const sonCheckWeather=()=>{
    const possibleOutcomes=["rainy","sunny", "unexpected error"]
    setTimeout(()=>{
        const randomNumber=Math.floor(Math.random()*2)
        const result = possibleOutcomes[randomNumber]
        console.log("The son: weather is ", result);
        fatherWillDecide(result);
    },2000)
}
const fatherWillDecide = (weather)=>{
    console.log("the father says: ")
if (weather === "sunny") {
    console.log("we are going for boating");
} else if (weather === "rainy"){
    console.log("we will stay home");
} 
else {
    console.log("we will watch tv");
}
}

sonCheckWeather()

console.log("hello samalik");

let sumNum = (x,y) => {
    console.log(x + y);
}
























