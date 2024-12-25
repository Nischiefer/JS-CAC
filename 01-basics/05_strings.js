const name = "nischal"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('nischal-ns-com');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,4)
console.log(anotherString)

const newStringOne = "     nischal    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://youtube.com/nisch%20iefer"

console.log(url.replace('%20','-'))
console.log(url.includes('hero'))

console.log(gameName.split('-'))