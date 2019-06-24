var dadJokes = ["Dad, did you get a haircut?" ,
"Why don't eggs tell jokes? " ,
"I don't trust stairs." ,
"What do you call someone with no body and no nose?" ,
"Did you hear the rumor about butter?" ,
"Why couldn't the bicycle stand up by itself?" ,
"Dad, can you put my shoes on?" ,
"Why can't a nose be 12 inches long?" ,
"This graveyard looks overcrowded." ,
"Dad, can you put the cat out?"]
var answers = ["No, I got them all cut!" ,
"They'd crack each other up!" ,
"They're always up to something." ,
"Nobody knows." ,
"Well, I'm not going to spread it!" ,
"It was two tired." ,
"No, I don't think they'll fit me." ,
"Because then it would be a foot." ,
"People must be dying to get in." ,
"I didn't know it was on fire."]
// console.log(dadJokes [0]);
// console.log(answer [0]);
//
// console.log(dadJokes [1]);
// console.log(answers [1]);
//
// console.log(dadJokes [2]);
// console.log(answers [2]);
//
// console.log(dadJokes [3]);
// console.log(answers [3]);
//
// console.log(dadJokes [4]);
// console.log(answers [4]);
//
// console.log(dadJokes [5]);
// console.log(answers [5]);
//
// console.log(dadJokes [6]);
// console.log(answers [6]);
//
// console.log(dadJokes [7]);
// console.log(answers [7]);
//
// console.log(dadJokes [8]);
// console.log(answers [8]);
//
// console.log(dadJokes [9]);
// console.log(answers [9]);
//
//
var randomNum = 0;
document.getElementById("jokes")

var button = document.getElementById ("jokes")

button.addEventListener("click" , function(){
console.log(Math.floor(Math.random() * dadJokes.length));
randomNum = Math.floor(Math.random() * dadJokes.length)

document.querySelector("h2").innerHTML = dadJokes[randomNum]
document.querySelector("h3").innerHTML = answers[randomNum]
})
