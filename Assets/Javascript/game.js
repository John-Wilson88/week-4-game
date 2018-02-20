//some Variable
var randNum = 0;
var redRand = 0;
var blueRand = 0;
var greenRand = 0;
var yellowRand = 0;

var adder = 0;

function generateNums() {
	randNum = Math.floor(Math.random() * 120) + 19;

	redRand = Math.floor(Math.random() * 12) + 1;
	blueRand = Math.floor(Math.random() * 12) + 1;
	greenRand = Math.floor(Math.random() * 12) + 1;
	yellowRand = Math.floor(Math.random() * 12) + 1;
}
	


// jQuery to run the GenerateRandomNumber and GenerateCrystalNumber functions when the page loads.
$( window ).load( generateNums(), function() {

	console.log(randNum);

	document.getElementById("randomNumber").innerHTML = randNum;
	document.getElementById("userScore").innerHTML = adder;

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


function checker() {

	document.getElementById("userScore").innerHTML = adder;

	if (adder > randNum) {
		generateNums();
		alert("you lose...");


	}

	if (adder === randNum) {
		alert("you win!");
	}
}







});

