// fnm env --use-on-cd | Out-String | Invoke-Expression
let score =true

console.log(typeof score)
console.log(typeof (score));

let valueInNumber = Number(score)           //capital ma lekhne datatype
console.log(valueInNumber);

//"33"=> 33
//"33abc"=> NaN(not a number) but type of chai number bhancha
//true=> 1; false=>0

let isLoggedin=1

let booleaisLoggedin = Boolean(isLoggedin);
console.log(booleaisLoggedin)

//1=>true; 0=>false
//"" =>false
//"nischal"=> true

let somenum=33;
let strnum= String(somenum)
console.log(strnum)
console.log(typeof strnum)

//**********Operations**********
let val=3
let negVal=-val
console.log(negVal)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);

let str1="Nischal"
let str2="Shrestha"
let str3= str1 +str2
console.log(str3);

// console.log("1"+2)      //str   left to right str first ma bhaye sab str
// console.log(1 + "2")    //str
// console.log("1" + 2 + 2)    //str
// console.log(1 + 2 + "2")    //num str
// console.log(1 + 2 + "2" + 4)    //num str

console.log(+true)
console.log(+"")

let num1 = num2 = num3 =2+2       //calcha code sab ko value 4 huncha but dont try this shit

let gameCounter=100
++gameCounter ;
console.log(gameCounter)

