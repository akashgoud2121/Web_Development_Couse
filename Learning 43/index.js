console.log("Loops")


let a=1

for (let i = 0; i < 100; i++) {
    console.log(i+a)
    
}

let o={
    name:"Akash",
    role:"Web dev",
    company:"Apple"
}

for(const key in o){
    const element=o[key];
    console.log(key,element)
}

for(const c of "Akash"){
    console.log(c)
}

//type forof enter in vscode and forin for ojects

// for (const element of object) {
    
// }

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// let i=0 ;
// while(i<6){
//     console.log(i)
//     i++

// }
let i=0 ;

do {
    console.log(i)
     i++
    
} while (i<6);