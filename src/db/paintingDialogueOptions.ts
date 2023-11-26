import { PaintingId, PaintingDialogueOptions } from './types'

export const paintingDialogueOptions: Record<PaintingId, PaintingDialogueOptions> = {
	'harmonizing': {
		player1: {
			locked: null,
			unlocked: {
				speaker: 'Men',
				text: '*sing together as a quartet*',
				next: null
			},
		},
		player2: {
			locked: null,
			unlocked: {
				speaker: 'Narrator',
				text: 'You walked along the streets of West Chester, Philadelphia, a quaint small town. Around the corners are four men, singing together as a quartet. After harmonizing with each other for a while, they stopped and started talking among themselves.',
				next: {
					speaker: 'Man 1',
					text: 'Man we sound soo good!',
					next: {
						speaker: 'Man 2',
						text: 'Jake, could you just sing the second part a little bit higher… greatly appreciated.',
						next: null // TODO: add rest of dialogue
					}
				}
			}
		},
	}
}
