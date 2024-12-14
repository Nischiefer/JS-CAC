// fnm env --use-on-cd | Out-String | Invoke-Expression
// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

console.log("2">1)      //milcha but be careful and m,ake sure they are of same datatype
console.log("02">=1)    //Typescript makes sure yesto compare garna nadina(tS just gives yestai rules)

console.log(null>0);        //equality check == and comparisions>< <= >= work diferently
console.log(null==0);       //comparisions convert null to a number, treating it as 0.
console.log(null>=0);       //thats why (3) ma numm>=0 is true and (1) ma null >0 is false

// console.log(undefined ==0)           all false
// console.log(undefined >0)        
// console.log(undefined <0)

//===   strict check (datatype ni check gardincha)
console.log("2"===2);