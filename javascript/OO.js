// Classes
function XorO(x, y, id)
{
	this.x = x;
	this.y = y;
	this.id = id;
	this.sizeX = GRID.x[1];
	this.sizeY = GRID.y[1];
}

// Class-related Functions
function drawShape(obj)
{
	if(obj.id == 'X')
	{
		CONTEXT.beginPath();
		CONTEXT.moveTo(obj.x, obj.y);
		CONTEXT.lineTo(obj.x + obj.sizeX, obj.y + obj.sizeY);
		CONTEXT.strokeStyle = 'red';
		CONTEXT.lineWidth = '5';
		CONTEXT.moveTo(obj.x + obj.sizeX, obj.y);
		CONTEXT.lineTo(obj.x, obj.y + obj.sizeY);
		CONTEXT.stroke();
	}
	else // obj.id == 'O'
	{
		CONTEXT.beginPath();
		CONTEXT.ellipse(obj.x + obj.sizeX * 0.5 , obj.y + obj.sizeY * 0.5, obj.sizeX * 0.5, obj.sizeY * 0.5, 0, 0, 2 * Math.PI);
		CONTEXT.strokeStyle = 'blue';
		CONTEXT.lineWidth = '5';
		CONTEXT.stroke();
	}
}
