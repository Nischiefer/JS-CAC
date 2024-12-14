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