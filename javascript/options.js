// Button Functions
function restartButton()
{
	initialize();
}

// Select Function
function selectOption()
{
	var e = document.getElementById("selectLevel");
	var strUser = e.options[e.selectedIndex].value;
	AI_LEVEL = Number(strUser);
	console.log(AI_LEVEL);
}

// Radio Buttons
function addRadios()
{
	var leftRadioButton = document.getElementById("left");
	var rightRadioButton = document.getElementById("right");

	leftRadioButton.onclick = changePlayer1; 
	rightRadioButton.onclick = changePlayer2; 
}

function changePlayer1()
{
	console.log("PLAYER1 = ", PLAYER1);
	PLAYER1 = !PLAYER1;
	if(!PLAYER1) AIplayer(AI_LEVEL);
}

function changePlayer2()
{
	console.log("PLAYER2 = ", PLAYER2);
	PLAYER2 = !PLAYER2;
	if(!PLAYER2) AIplayer(AI_LEVEL);
}
