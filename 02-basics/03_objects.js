//singleton             literals jasari declare garda singleton bandaina but constructor le banauda chai yes singleton bancha
// Object.create        yesari garda singleton bancha (constructor method)

//object literals

const mySym = Symbol("key1")        //symbol declare garera

const JsUser = {
    name:"Nischal",             //key : Values,
    "full name":"Nischal Shrestha",       //nochance it gets accessed by . so use [""]
    [mySym]: "mykey1",          //symbol add as as key or inside an object amthi ko refer garna
    age:22,
    location:"Kathmandu",
    email:"main.nischiefer@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"],
}

// console.log(JsUser.email);      // . thikcha but can be bettter          special cases ma chai [] garne but . use garda ni huncha values access ko lagi
// console.log(JsUser["email"])
// console.log(JsUser["full name"])  
// console.log(JsUser[mySym])  


JsUser.email = "Nischalkomail@gmail.com"        //mail change agrna
// Object.freeze(JsUser)                           //lock or change garnna nadina freeze sue agrna and with Object.freeze()
JsUser.email = "Nismail@gmail.com"        
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello JS USer")
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user,${this.name}`)             //`` string interpolation bhancha backticks use agrera
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())

