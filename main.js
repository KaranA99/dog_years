//variable myAge being set to my age
var myAge = 25;

//variable earlyYears being declared and set to 2 (can change)
var earlyYears = 2;

//earlyYears being subtracted by 10.5 years 
earlyYears *= 10.5;

//variable laterYears being set to myAge subtracted by 2 eyars since earlyYears accounts for 2 years
var laterYears = myAge - 2;

//calculating number of dog years accounted 
laterYears *= 4

//adding earlyYears and laterYears to get my age in dog years
var myAgeInDogyears = earlyYears + laterYears

//returning my name in lowercase
myName = "Karan";
myName = myName.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogyears} years old in dog years.`)
