$(document).ready(function() { // starts the jQuery

	var yourMatchingNumber = 0;

	//create a random number
	var randomNum = randomNumGen();

	var wins = 0;
	var losses = 0;
	var cats;

	function randomNumCats() {
		
		return {
			'red' : {
				points: Math.floor(Math.random() * 11) + 1, // math.floor() function returns the largest integer <than or equal to a given number
				imageUrl: "assets/images/scarycat.jpeg" //math.random() how you scale your desired range
			},
			'blue' : {
				points: Math.floor(Math.random() * 11) + 1,
				imageUrl: "assets/images/happycat.jpeg"
			},
			'yellow' : {
				points: Math.floor(Math.random() * 11) + 1,
				imageUrl: "assets/images/sadcat.jpg"
			},
			'green' : {
				points: Math.floor(Math.random() * 11) + 1,
				imageUrl: "assets/images/funnycat.jpg"
			}
		};
	}

	function randomNumGen(){
		return Math.floor(Math.random() * 100) + 18;
	}

	function setGame() {
		yourMatchingNumber = 0;
		cats = randomNumCats();
		//create a random number and render it
		randomNum = randomNumGen();
		var randomNumDiv = $("<div id='random-number'>").text(randomNum);
		$("#random-area").html(randomNumDiv);
	}

	function updateDom(didUserWin){
		$('#winSpot').empty();

		if (didUserWin === true){
			$('#winSpot').append($('<p>').text('Winner winner cat dinner'));
			setGame();
			renderMatchingNumber();
		}else if(didUserWin === false) {
			$('#winSpot').append($('<p>').text('U Lose'));
			setGame();
			renderMatchingNumber();
		}

		var wSpan = $('<span>').text(wins);
		var lSpan = $('<span>').text(losses);

		var pWins = $('<p>').text('Wins: ');
		var pLosses = $('<p>').text('Losses: ');

		pWins.append(wSpan);
		pLosses.append(lSpan);

		$('#winSpot').append(pWins);
		$('#winSpot').append(pLosses);
	}

	function renderCats(){
		
		for (var key in cats) {
			var catsDiv = $("<div class='cats-button' data-name='" + key + "'>");
		  	var catsImg = $("<img alt='image' class='cats-img'>").attr("src", cats[key].imageUrl);
		    catsDiv.append(catsImg);
		    $("#cat-area").append(catsDiv);
		}
	}

	function updateMatchingNumber(th){
		var self = th;

		if (self.attr('data-name') == 'red') {
			yourMatchingNumber = yourMatchingNumber + cats[self.attr('data-name')].points;
		}else if (self.attr('data-name') == 'blue') {
			yourMatchingNumber = yourMatchingNumber + cats[self.attr('data-name')].points;
		}else if (self.attr('data-name') == 'yellow') {
			yourMatchingNumber = yourMatchingNumber + cats[self.attr('data-name')].points;
		}else{
			yourMatchingNumber = yourMatchingNumber + cats[self.attr('data-name')].points;
		}
	}

	function renderMatchingNumber(){
		var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
		$("#score-spot").html();
		$("#score-spot").html(scoreNumDiv);
	}

	setGame();
	updateDom();
	renderCats();
	renderMatchingNumber();

	
	$(".cats-button").on("click", function(event) {
		updateMatchingNumber($(this));
		renderMatchingNumber();

		//check if won or lost
		if (yourMatchingNumber == randomNum) {
			wins++;
			setGame();
			updateDom(true);
		}else if (yourMatchingNumber > randomNum) {
			losses++;
			setGame();
			updateDom(false);
		}
	});

});