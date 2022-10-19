console.log("hello world");

document.write("<h1>ConditionalDemo</h1>");

// if(10 < 5){
//     alert("Correct 10 is less than 5!")
// }
// else{
//     alert("You are WRONG 10 is not less than 5!")
// };

// let num = 5 + 5;

// var myNumb = prompt('chose a number between 1 and 10 (Make sure it is an number not words)')

// if (myNumb < 5){
//     alert("your number is less than 5")
// }
// else if(myNumb > 5){
//     alert("your number is greater than 5")
// }
// else{
//     alert("your number is 5")
// };

alert("I am magic, I can guess the number your thinking of in two guesses.")

var numb = prompt("Try me, pick a number between a number between 1 and 20, don't cheat make sure it is a numeral entry not with words.")

if(numb > 5 && numb < 15){
    alert("You chose a number somewhere in the middle didn't you?")
}

else if(numb < 5){
    alert("I know you picked a number that is small.")
}

else if(numb > 15){
alert("You chose one that is a high number.")
}

else if(numb = 5 ){
alert("You are trying to be tricky? Aren't you?")
}

else if(numb = 15){
    alert("You are trying to be tricky? Aren't you? Well guess what...")
    }

else{
    alert("Cheater cheater pumpkin eater.")
};

document.write("<h2>Your number is...</h2> ")
document.write(numb)
