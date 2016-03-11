// Functions on Mouse Management
function getMousePos(canvas, evt) 
{
	var rect = canvas.getBoundingClientRect();
	return {
		x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
		y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
	};
}

function checkBox(pos)
{
	var idx = 0;
	while(pos.x > GRID.x[idx]) idx++;
	var localX = GRID.x[idx - 1] ;
	var idy = 0;
	while(pos.y > GRID.y[idy]) idy++;
	var localY = GRID.y[idy - 1];
	var newShape;
	var placeable = false;
	if(SHAPELIST[idx - 1 + (idy -1) * BOXNO] == undefined)
	{
		if(TURN % 2 == 0)
			newShape = new XorO(localX, localY, 'X');
		else
			newShape = new XorO(localX, localY, 'O');
		placeable = true;
	}
	return {"idx": idx - 1, "idy": idy - 1, "newShape": newShape, "placeable": placeable};
}

function checkLocation(pos)
{
	drawAll();
	var val = checkBox(pos);
	if(val.placeable)
		drawShape(val.newShape);
}

function humanPlayer(pos)
{
	var val = checkBox(pos);
	if(val.placeable)
	{
		SHAPELIST[val.idx + val.idy * BOXNO] = val.newShape;
		TURN += 1;
		var gameStatus = checkWinner(SHAPELIST, true);
		if(gameStatus.result)
			initialize();
		else if(TURN === BOXNO * BOXNO)
		{
			alert("Game Over! No winner!");
			initialize();
		}
	}
	else
	{
		humanPlayer(pos); // Will reach maximum stack
	}
}
