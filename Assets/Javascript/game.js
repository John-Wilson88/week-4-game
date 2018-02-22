//some Variable
var randNum = 0;
var redRand = 0;
var blueRand = 0;
var greenRand = 0;
var yellowRand = 0;

var adder = 0;

var losses = 0;
var wins = 0;


//generates all random numbers
function generateNums() {
	randNum = Math.floor(Math.random() * 120) + 19;

	document.getElementById("randomNumber").innerHTML = randNum;

	redRand = Math.floor(Math.random() * 12) + 1;
	blueRand = Math.floor(Math.random() * 12) + 1;
	greenRand = Math.floor(Math.random() * 12) + 1;
	yellowRand = Math.floor(Math.random() * 12) + 1;	
}

// compares user score to random number to check for win or loss.
function checker() {

	if (adder > randNum) {		
		losses++;
		document.getElementById("losses").innerHTML = losses;
		adder = 0;

		generateNums();	
	}

	if (adder === randNum) {

		wins++;
		document.getElementById("wins").innerHTML = wins;
		adder = 0;
		
		generateNums();
	}

	document.getElementById("userScore").innerHTML = adder;
}
	
// jQuery to run the GenerateRandomNumber and GenerateCrystalNumber functions when the page loads.
$( window ).load( generateNums(), function() {

	document.getElementById("userScore").innerHTML = adder;

});

$("#redCrys").click(function() {
	adder += redRand;
	console.log(adder);
	checker();
	return adder;
});

$("#blueCrys").click(function() {
	adder += blueRand;
	console.log(adder);
	checker();
		return adder;
});

$("#greenCrys").click(function() {
	adder += greenRand;
	console.log(adder);
	checker();
	return adder;
});

$("#yellowCrys").click(function() {
	adder += yellowRand;
	console.log(adder);
	checker();
	return adder;
});


/*
	next big thing is to make functions for winning and lossing that use jQuery to display number 
	of wins and losses. ( using the append thing or the appendTo thing.)
*/






