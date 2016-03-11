// Functions on Window Size Management
function transformSize(coor, prevSizes)
{
	coor.x *= CANVAS.width / prevSizes.width;
	coor.sizeX *= CANVAS.width / prevSizes.width;
	coor.y *= CANVAS.height / prevSizes.height;
	coor.sizeY *= CANVAS.height / prevSizes.height;
	return coor;
}

function resizeCanvas() 
{
	var prevSizes = {};
	prevSizes["width"] = CANVAS.width;
	prevSizes["height"] = CANVAS.height;
	CANVAS.width = window.innerWidth;
	if(CANVAS.width > WIDTH_MAX) CANVAS.width = WIDTH_MAX;
	CANVAS.height = window.innerHeight;
	if(CANVAS.height > HEIGHT_MAX) CANVAS.height = HEIGHT_MAX;
	var len = BOXNO * BOXNO;
	for(var i = 0; i < len; i++)
		if(SHAPELIST[i] != undefined)
			SHAPELIST[i] = transformSize(SHAPELIST[i], prevSizes);
	redraw();
}
