//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate =new Date(2003,3,11)             months starts from 0=jan 
// let myCreatedDate =new Date(2003,3,11,5,3)              //time ni dekhaucha
// let myCreatedDate =new Date("2003-04-11")              //   YY/MM/DD
let myCreatedDate =new Date("04-11-2003")              //   MM/DD/YY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// '${newDate.getDay()} and the time'

newDate.toLocaleString('default',{
    weekday: "long",
    
})