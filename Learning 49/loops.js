let a=[2,93,5,34,88]

for (let index = 0; index < a.length; index++) {
    const element = array[index];
    
    console.log(element);
}

a.array.forEach((value,index,arr) => {
    console.log(value,index,arr)
});

let obj={
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}


for (const iterator of a) {
    console.log(iterator);
    
}

