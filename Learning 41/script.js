console.log("Hi")
var a=10;
a=a+1//allowed
var b=20;
{
    var a=20
    console.log(a)
}



var c="Harry";
//var 55a="rohan"; //Not allowed

console.log(a+b+8)

console.log(typeof a,typeof b ,typeof c )

//const a1=6
//a1= a1+1
//Not allowed

//Always use let in the modern javascript
//let is block scoped and var is global scoped

let d=10

{
    let d=20
    console.log(d)
}
console.log(d)


let x ="Akash";
let y=22;
let z=3.5;
const p =true;
let q=undefined
let r = null
console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)


let o={
    "name":"Akash",
    "job role":"web dev",
    "is handsome":true
}
console.log(o,typeof o)
o.salary="100crores"
o.salary="500crores"
console.log(o)