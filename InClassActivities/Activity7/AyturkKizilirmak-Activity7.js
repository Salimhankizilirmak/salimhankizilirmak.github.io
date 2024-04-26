var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	
};

function displayResults()
{
	var average = 0;
	var highest = 0;


	for(var i=0;i<scores.length;i++)
	{
		average = (average * (i) + scores[i]) / (i+1);

		if (scores[i] > highest) {
			highest = scores[i];
		}
	}
	var highestName = scores.indexOf(highest);


	$("results").innerHTML = "<h2> Results </h2>"
		+ "<br/> Avarage : " + average + "<br />"
		+ "Highest : " + names[highestName] + " with a score of " + scores[highestName];
	
	
}
function displayScores() {

	
	var tableOfScore = '<tr>' + '<td>' + '<b>Name</b>' + '</td>' + '<td>' + '<b>Score</b>' + '</td>' + '</tr>'
	for (var i = 0; i < names.length; i++) {
		tableOfScore += '<tr>' + '<td>' + names[i] + '</td>' + '<td>' + scores[i] + '</td>' + '</tr>'

	}

	$("scores_table").innerHTML = "<h2> Scores </h2>" + tableOfScore;

}

function addScore() {

	
	var negativityCheck = parseInt($("score").value) <= 0;
	var nameCheck = String($("name").value) == '';
	var scoreCheck = String($("score").value) == '';
	var hundredCheck = parseInt($("score").value) >= 101;


	//If given conditions are satisfied
	if (nameCheck || hundredCheck || negativityCheck || scoreCheck) {

		alert("Please enter valid name and score ");
	}

	//Add names and scores those.
	else {
		names.push(String($("name").value));
		scores.push(parseInt($("score").value));
		$("name").value = "";
		$("score").value = "";
		$("name").focus();
	}

}



