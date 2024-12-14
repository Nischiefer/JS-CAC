// fnm env --use-on-cd | Out-String | Invoke-Expression
console.log("Nischal");

const accId = 123;                  //constant
let accEml= "nischal@gmail.com" ;    //variable which can be reasigned later but cant be redeclared ; thau thau ma scope problem hatauna like same name var le value change agrna nadina
var accPas="hello";                    //it cant be reassigned but can be re declared  //var birsidiye hucnha use nagarekai best
accCt="ktm";
let accstste;

// accId=2 ;                        // constant ho tahts why error falcha (assignment to constant variable)
accEml="nisc@ns.com";
accPas="hlo";
accCt="pkr"   ;

//output
console.log(accId);
console.table([accId,accEml,accPas,accCt,accstste])