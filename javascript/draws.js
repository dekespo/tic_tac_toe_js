// Functions on Drawing Management
function redraw() 
{
	createGrid();
	var len = BOXNO * BOXNO;
	for(var i = 0; i < len; i++)
		if(SHAPELIST[i] != undefined)
			drawShape(SHAPELIST[i]);
}

function drawAll()
{
    CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
	redraw();
}

function createGrid()
{
	var x = []; var y = [];
	for(var i = 0; i <= BOXNO; i++)
	{
		x.push(CANVAS.width / BOXNO * i);
		y.push(CANVAS.height / BOXNO * i);
	}
	CONTEXT.beginPath();
	for(var i = 0; i <= BOXNO; i++)
	{
		CONTEXT.moveTo(x[i], y[0]);
		CONTEXT.lineTo(x[i], y[BOXNO]);
		CONTEXT.moveTo(x[0], y[i]);
		CONTEXT.lineTo(x[BOXNO], y[i]);
	}
	CONTEXT.strokeStyle = 'black';
	CONTEXT.lineWidth = 8;
	CONTEXT.stroke();
	GRID["x"] = x; GRID["y"] = y;
}
