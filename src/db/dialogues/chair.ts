import { PaintingDialogues, DialogueNode } from '.'

const sitOptionDialogue: DialogueNode = {
	speaker: 'Player 2',
	text: '*Feels at peace*',
	next: {
		speaker: 'Player 2',
		text: 'This is what Bob must have felt after bickering with so many people.',
		next: {
			speaker: 'Chair',
			text: 'Yo you are so real for this',
			next: {
				speaker: 'Player 2',
				text: '*screams* What the heck? You can talk?',
				next: {
					speaker: 'Chair',
					text: 'Nobody ever talks to me, and no one ever asked…. I can indeed talk.',
					next: {
						speaker: 'Player 2',
						text: 'Well I want to talk to you. Where is the guy that was just here?',
						next: {
							speaker: 'Chair',
							text: `Oh him? He was super stressed out about a “problem set due at 5PM”. Looked real dejected, but quickly declared real loudly that he'll go to <<VENICE>> to get a breather.`,
							next: {
								speaker: 'Player 2',
								text: '... Venice it is.',
								newUnlockedPainting: 'venice',
								importantInfo: [
									'Bob went to VENICE.'
								]
							}
						}
					}
				}
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
		text: "This exhibition has asked me to stand for too long, sit if you agree",
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
					text: '*Admires the architectural beauty of the chair*',
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
