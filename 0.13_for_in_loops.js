var footballTeam = "Packers";
//for(i = 0; i < footballTeam.length; i++)
for (var letter in footballTeam) {
	console.log(footballTeam[letter]);
}

var basketballTeam="Pacers";
for (var letter in basketballTeam) {
	console.log(basketballTeam[letter]);
}

//create a for in loop for your favorite food

var vowelCount = 0;
var favoriteFood = "Passion Fruit";
for (letter in favoriteFood) {
	if (favoriteFood[letter].tolowerCase() ==="a" || "e" || "i" || "o" || "u") {
		vowelCount++
	}
}
console.log("There are " + vowelCount + " vowels in " + favoriteFood);