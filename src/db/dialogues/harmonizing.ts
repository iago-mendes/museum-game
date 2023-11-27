import { PaintingDialogues } from '../types'

export const harmonizingDialogues: PaintingDialogues = {
	player1: {
		speaker: 'Men',
		text: '*sing together as a quartet*',
	},
	player2: {
		speaker: 'Narrator',
		text: 'You walked along the streets of West Chester, Philadelphia, a quaint small town. Around the corners are four men, singing together as a quartet. After harmonizing with each other for a while, they stopped and started talking among themselves.',
		next: {
			speaker: 'Man 1',
			text: 'Man we sound soo good!',
			next: {
				speaker: 'Man 2',
				text: 'Jake, could you just sing the second part a little bit higher… greatly appreciated.',
				newUnlockedPainting: 'chair'
			}
		}
	}
}
