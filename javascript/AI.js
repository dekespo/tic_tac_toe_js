// AI function
// MiniMax Algorithm
function AIplayer(level)
{
	document.getElementById("message").innerHTML = "It's my turn!";

	// Define game class
	function game(level)
	{
		function getScore(playerID, depthLevel)
		{
			var score = 0;
			if(playerID == 'X')
				score = depthLevel - 10;
			else
				score = 10 - depthLevel;
			return score;
		}

		function boardStrategy(board, playerID, depthLevel, localTurn)
		{
			var bestValue;
			if(playerID == 'X')
				bestValue = -Infinity;
			else
				bestValue = Infinity;

			var chosenBoardScore;
			for(var i = 0; i < BOXNO * BOXNO; i++)
			{
				var copy = board.slice(0); // copying properly
				if(copy[i] == undefined)
				{
					copy[i] = new XorO(i % BOXNO * GRID.x[1], Math.floor(i / BOXNO) * GRID.y[1], playerID);
					var newBoardScore = {"board":copy, "score":bestValue};
					var recur = minimax(newBoardScore, depthLevel, localTurn);
					if(playerID == 'X' && bestValue < recur.score)
					{
						bestValue = recur.score;
						newBoardScore.score = recur.score;
						chosenBoardScore = [newBoardScore];
					}
					else if(playerID == 'X' && bestValue == recur.score)
					{
						newBoardScore.score = recur.score;
						chosenBoardScore.push(newBoardScore);
					}
					else if(playerID == 'O' && bestValue > recur.score)
					{
						bestValue = recur.score;
						newBoardScore.score = recur.score;
						chosenBoardScore = [newBoardScore];
					}
					else if(playerID == 'O' && bestValue == recur.score)
					{
						newBoardScore.score = recur.score;
						chosenBoardScore.push(newBoardScore);
					}
				}
			}
			return chosenBoardScore[Math.floor(Math.random() * chosenBoardScore.length)];
		}

		function minimax(boardScore, depthLevel, localTurn)
		{
			totalCall += 1;
			var playerID;
			if(localTurn % 2 == 0)
				playerID = 'X'; // Maximizing
			else 
				playerID = 'O'; // Minimizing

			var board = boardScore.board;
			var gameStatus = checkWinner(board, false);
			if(localTurn === BOXNO * BOXNO || gameStatus.result || level == depthLevel)
			{
				boardScore.score = getScore(playerID, depthLevel);
				return boardScore;
			}

			localTurn += 1;
			depthLevel += 1;

			return boardStrategy(board, playerID, depthLevel, localTurn);
		}

		var startScore;
		if(TURN % 2 == 1)
			startScore = -Infinity;
		else
			startScore = Infinity;
		var boardScore = {"board": SHAPELIST, "score": startScore};
		var totalCall = 0;
		this.nextMove = minimax(boardScore, 0, TURN);
		console.log("totalcall", totalCall);

		this.play = function(board)
		{
			SHAPELIST = board;
			TURN += 1;
			drawAll();
			var gameStatus = checkWinner(SHAPELIST, true);
			if(gameStatus.result)
				initialize();
			else if(TURN === BOXNO * BOXNO)
			{
				alert("Game Over! No winner!");
				initialize();
			}
		}

		document.getElementById("message").innerHTML = "Now it's your turn...";
	}

	setTimeout(function(){
		var ai = new game(level);
		var result = ai.nextMove;
		ai.play(result.board);
	}, 1000); // 1 sn
}
