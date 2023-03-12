function getComputerChoice () {
	let array = ["rock", "paper", "scissors"];
	return (array[Math.floor(Math.random() * 3)]);
}

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
	let playerchoice = playerSelection.toLowerCase();
	if ((playerchoice === "rock" && computerSelection === "paper")
		|| (playerchoice === "paper" && computerSelection === "scissors")
		|| (playerchoice === "scissors" && computerSelection === "rock")) {
			return ("you lose :(");
	}
	else if (playerchoice === computerSelection) {
		return ("same result ^_^");
	}
	else {
		return ("you win :)");
	}
}


function game() {
	let playerScore = 0;
	let computerScore = 0;
	
	for (let i = 0; i < 5; i++) {
		const playerSelection = prompt("enter you choice");
		const computerSelection = getComputerChoice();
		let result = playRound(playerSelection, computerSelection);
		
		console.log(`your choice : ${playerSelection}\ncomputer choice : ${computerSelection}\nresult : ${result}`);

		if (result === "you win :)")
			playerScore++; 
		else if (result === "you lose :(")
			computerScore++;
	}
	if (playerScore > computerScore)
		console.log("you win all the rounds :)");
	else if (playerScore < computerScore)
		console.log("you lose all the rounds :(");
	else
		console.log("same result ^_^");
}

game();
// rock < paper
// paper < scissors
// scissors < rock