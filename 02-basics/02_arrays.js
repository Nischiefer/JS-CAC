const marvel_heros = ["deadpool","ironman","spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])      narmaro bani flash lai access garna

// const allHeroes = marvel_heros.concat(dc_heros)
// console.log(allHeroes);

const all_new_heros = [...marvel_heros, ...dc_heros]         //glass futera "spread" huncha so yes yesari code ma bhetincha but can use concat too!

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Nischal"))
console.log(Array.from("Nischal"))
console.log(Array.from({name:"nischal"}))   //interesting khali array firta garcha garna sakdaina afai [] dincha

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3))
