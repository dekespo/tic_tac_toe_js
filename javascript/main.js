// Main function
function main()
{
	// Start
	initialize();
	AI_LEVEL = 3;
	PLAYER1 = true; PLAYER2 = false;

	// Mouse Events
	CANVAS.addEventListener('mousemove', function(evt) {
		var mousePos = getMousePos(CANVAS, evt);
		checkLocation(mousePos);
	  }, false);

	CANVAS.addEventListener('mousedown', function(evt) {
		var mousePos = getMousePos(CANVAS, evt);
		var val = checkBox(mousePos);
		//if(val.placeable && (PLAYER1 || PLAYER2))
		//{
		//	humanPlayer(mousePos);
		//}
		if(PLAYER1) humanPlayer(mousePos);
		else AIplayer(AI_LEVEL); 
		if(PLAYER2) humanPlayer(mousePos);
		else AIplayer(AI_LEVEL); 
	  }, false);

	CANVAS.addEventListener('mouseout', function(evt) {
		drawAll();
	  }, false);
}
