class Game {
	constructor() {
		this.squares = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
		this.emptySquares = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
		this.start();
	}
	start() {
		for (var i = 0; i < 16; i++) {
			document.getElementById(i.toString()).innerText = '';
		}
		var square = Math.floor(Math.random() * 8);
		this.squares[square] = 2;
		this.emptySquares[square] = false;
		document.getElementById(square.toString()).innerText = '2';
		square = Math.floor(Math.random() * 8) + 8;
		this.squares[square] = 2;
		this.emptySquares[square] = false;
		document.getElementById(square.toString()).innerText = '2';
	}
	upPressed() {
		function move() {
			var moves = [];
			for (var i = 4; i < 16; i+=4) {
				if (this.squares[i-4] === null && this.squares[i] !== null) {
					this.squares[i-4] = this.squares[i];
					this.squares[i] = null;
					document.getElementById((i-4).toString()).innerText = this.squares[i-4].toString();
					document.getElementById((i).toString()).innerText = this.squares[i].toString();
				}
				if (this.squares[i-3] === null && this.squares[i+1] !== null) {
					this.squares[i-3] = this.squares[i+1];
					this.squares[i+1] = null;
					document.getElementById((i-3).toString()).innerText = this.squares[i-3].toString();
					document.getElementById((i+1).toString()).innerText = this.squares[i+1].toString();
				}
				if (this.squares[i-2] === null && this.squares[i+2] !== null) {
					this.squares[i-2] = this.squares[i+2];
					this.squares[i+2] = null;
					document.getElementById((i-2).toString()).innerText = this.squares[i-2].toString();
					document.getElementById((i+2).toString()).innerText = this.squares[i+2].toString();
				}
				if (this.squares[i-1] === null && this.squares[i+3] !== null) {
					this.squares[i-1] = this.squares[i+3];
					this.squares[i+3] = null;
					document.getElementById((i-1).toString()).innerText = this.squares[i-1].toString();
					document.getElementById((i+3).toString()).innerText = this.squares[i+3].toString();
				}
			}
		}
		move();
	}
}
function keyPressed(event) {
	if (event.key === undefined) {
		var game = new Game();
	} else if (event.key === 'ArrowUp') {
		game.upPressed();
	}
}