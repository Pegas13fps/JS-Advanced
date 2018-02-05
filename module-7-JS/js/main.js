let layout = {
	topRow: 'qwertyuiop',
	middleRow: 'asdfghjkl',
	bottomRow: 'zxcvbnm',

	createKeyboardLines: function() {
		let topLine = document.createElement('div');
		topLine.classList.add('topLine');
		document.body.appendChild(topLine);

		let secondLine = document.createElement('div');
		secondLine.classList.add('secondLine');
		document.body.appendChild(secondLine);

		let thirdLine = document.createElement('div');
		thirdLine.classList.add('thirdLine');
		document.body.appendChild(thirdLine);		
	},

	createLayout: function() {
		for(let i = 0; i < this.topRow.length; i++){
			let firstRow = document.querySelector('.topLine');
			let keyboardButton = document.createElement('div');
			keyboardButton.classList.add('button');
			keyboardButton.textContent = this.topRow[i].toUpperCase();
			firstRow.appendChild(keyboardButton);
		}
		for(let i = 0; i < this.middleRow.length; i++){
			let secondRow = document.querySelector(".secondLine");
			let keyboardButton = document.createElement('div');
			keyboardButton.classList.add('button');
			keyboardButton.textContent = this.middleRow[i].toUpperCase();
			secondRow.appendChild(keyboardButton);
		}
		for(let i = 0; i < this.bottomRow.length; i++){
			let thirdRow = document.querySelector(".thirdLine");
			let keyboardButton = document.createElement('div');
			keyboardButton.classList.add('button');
			keyboardButton.textContent = this.bottomRow[i].toUpperCase();
			thirdRow.appendChild(keyboardButton);
		}
	}
}
layout.createKeyboardLines();
layout.createLayout();