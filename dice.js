let dBtn = document.querySelector("#btn");

let player1 = document.querySelector("#pl-1");
let player2 = document.querySelector("#pl-2");

let playerName1 = document.querySelector("#p");
let playerName2 = document.querySelector("#pp");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

let result = document.querySelector("#result");

let img = document.querySelector(".img");
let inputPlayer1;
let inputPlayer2;

dBtn.addEventListener("click", function () {
	inputPlayer1 = document.querySelector("#input-Player1").value;
	inputPlayer2 = document.querySelector("#input-Player2").value;
	img.classList.remove("hidden");
	player1.classList.add("hidden");
	player2.classList.add("hidden");
	playerName1.classList.add("hidden");
	playerName2.classList.add("hidden");
	input1.classList.add("hidden");
	input2.classList.add("hidden");

	result.classList.add("hidden");
	let p1 = (player1.innerHTML = Math.floor(Math.random() * 6 + 1));
	let p2 = (player2.innerHTML = Math.floor(Math.random() * 6 + 1));

	setTimeout(() => {
		player1.classList.remove("hidden");
		player2.classList.remove("hidden");
		input1.classList.remove("hidden");
		input2.classList.remove("hidden");
		result.classList.remove("hidden");
		img.classList.add("hidden");
		playerName1.classList.remove("hidden");
		playerName2.classList.remove("hidden");
	}, 2000);

	if (p1 > p2) {
		result.innerHTML = `Player ${inputPlayer1} win`;
	}

	if (p1 < p2) {
		result.innerHTML = `Player ${inputPlayer2} win`;
	}

	if (p1 == p2) {
		result.innerHTML = "Draw";
	}
});
