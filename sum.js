let roll = 55;
switch (roll) {
        case 1:
            console.log(`you scored 1`);
            break;
    
        case 2:
            console.log(`you scored 2`);
            break;
    
        case 3:
            console.log(`you scored 3`);
            break;
    
        case 4:
            console.log(`you scored 4`);
            break;
    
        case 5:
                console.log(`you scored 5`);
            break;
            
        case 6:
            console.log(`you scored 6`);
            break;
                
    
        default:
            console.log(`the number ${roll} is not possible`);
            break;
    }

    let numbers = [1,2,3,4,5,6,7,8,9]
for (i of numbers) {
    if (i==5) {
        break;
    } else {
        console.log(i);    
    }
    
}

// let i=0;
// while (i < 10) {
//     console.log(i);
//     i++;
    
// }

// let i=0;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);