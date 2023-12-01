import { PaintingDialogues } from '.'

export const prodigalSon: PaintingDialogues = {
	locked: {
		speaker: 'Man',
		text: '*wails and cries endlessly*'
	},
	player1: {
		speaker: 'Man',
		text: '*wails and cries*',
		next: {
			speaker: 'Player 1',
			text: "Hey man, your mom and dad are looking for you.",
			next: {
				speaker: "Man",
				text: "*stops crying* Is anything real anymore? How can we as a society get to a point where coins no longer matter? Why could money possibly be so… unshapely?",
				next: {
					speaker: "Player 1",
					text: "Hey man, I feel you. But your mom and dad need you man. What matters is in the present. Bob has no idea what he was talking about. He barely passed ECON 101.",
					next: {
						speaker: "Man",
						text: "*sniff* What's ECO… Nevermind. You are right. My dear parents need me. Times are hard.",
						next: {
							speaker: "Player 1",
							text: "Yeah yay I'm so happy for you. Now where's Bob.",
							next: {
								speaker: "Man",
								text: "He keeps hitting the keys of this strange device… Oh he muttered <<MONEY>> a bunch of times before the device made him disappear.",
								next: {
									speaker: "Player 1",
									text: "Appreciate it man. Take care of yourself. And put on some clothes.",
									
								}
							}
						}
					}
				}
			}
		}
	},
	player2: {
		speaker: 'Man',
		text: '*wails and cries*',
		next: {
			speaker: 'Player 2',
			text: 'Dude like literally shut up.',
			next: {
				speaker: 'Man',
				text: '*wails and cries endlessly*',
			}
		}
	}
}
