let arr=[3,434,534,53,22];

// let newArr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
    
// }
// console.log(newArr)


let newArr= arr.map((e,index,arr)=>
{
    return e**2;
})

console.log(newArr);

const greaterThanSeven=(e)=>{
    if(e>7){
        return true;
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let arr2=[1,2,3,4,5,6,7];

const red=(a,b)=>{
    return a*b
}

console.log(arr2.reduce(red))

