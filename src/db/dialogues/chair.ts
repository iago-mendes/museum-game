import { PaintingDialogues, DialogueNode } from '../types'

const sitOptionDialogue: DialogueNode = {
	speaker: 'Player 2',
	text: '*feels at peace*',
	next: {
		speaker: 'Player 2',
		text: 'This is what Bob must have felt after bickering with so many people.',
		next: {
			speaker: 'Chair',
			text: 'Yo you are so real for this',
			next: {
				speaker: 'Player 2',
				text: '*screams* What the heck? You can talk?'
			}
		}
	}
}

export const chairDialogues: PaintingDialogues = {
	locked: {
		speaker: 'Chair',
		text: "*it's a chair…*",
	},
	player1: {
		speaker: 'Chair',
		text: "*a chair doesn't have feelings*",
	},
	player2: {
		speaker: 'Chair',
		text: "This exhibition has made stand for too long, sit if you agree.",
		options: [
			{
				key: 'A',
				prompt: 'Sit',
				dialogue: sitOptionDialogue
			},
			{
				key: 'B',
				prompt: 'Stand',
				dialogue: {
					speaker: 'Player 2',
					text: '*admires the architectural beauty of the chair*',
					next: {
						speaker: 'Player 2',
						text: 'A simple structure, yet so many complexities!',
						next: {
							speaker: 'Narrator',
							text: 'The beauty before Player 2 makes them a little… tired',
							next: {
								speaker: 'Player 2',
								text: '*sits*',
								next: sitOptionDialogue
							}
						}
					}
				}
			}
		]
	}
}
