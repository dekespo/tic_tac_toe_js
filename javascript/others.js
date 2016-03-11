// Other Functions
function loadGlobalVariables()
{
	CANVAS = document.getElementById('canvas');
	PREV_CANVAS_SIZE = {"width": CANVAS.width, "height": CANVAS.height};
	CONTEXT = CANVAS.getContext('2d');
	BOXNO = 3;
	SHAPELIST = Array(BOXNO * BOXNO);
	TURN = 0;
	GRID = {};
	WIDTH_MAX = 400; HEIGHT_MAX = WIDTH_MAX; 
	//CANVAS.width = WIDTH_MAX; CANVAS.height = HEIGHT_MAX; // default
}

function initialize() 
{
	loadGlobalVariables();
	
	createGrid();

	window.addEventListener('resize', resizeCanvas, false);
	resizeCanvas();
}

function createLineArrays()
{
	var arr = [];
	var	diag1 = [];
	var	diag2 = [];
	for(var i = 0; i < BOXNO; i++)
	{
		var hori = [];
		var vert = [];
		for(var j = 0; j < BOXNO; j++)
		{
			hori.push(i + j * BOXNO);
			vert.push(i * BOXNO + j);
		}
		arr.push(hori);
		arr.push(vert);
		diag1.push(i * (BOXNO + 1));
		diag2.push((i+1) * (BOXNO - 1));
	}
	arr.push(diag1);
	arr.push(diag2);
	return arr;
}

function checkWinner(board, announce)
{
	var winArr = createLineArrays();

	for(var idx = 0; idx < winArr.length; idx++)
	{
		var arr = winArr[idx];
		var chosenSymbol;
		try { chosenSymbol = board[arr[0]].id; }
		catch(err) { continue; }
		var match = true;
		for(var i = 1; i < arr.length; i++)
		{
			var elementID;
			try 
			{
				elementID = board[arr[i]].id;
				match = match && (chosenSymbol === elementID);
				if(!match)
					break;
			}
			catch(err) 
			{
				match = false;
				break;
			}
		}
		if(match)
		{
			if(announce)
				alert("The winner is " + chosenSymbol + " .");
			break;
		}
	}
	return {"result": match, "symbol": chosenSymbol}; // remove symbol
}
