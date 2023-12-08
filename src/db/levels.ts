import { PaintingId } from './paintingIds'

export type LevelId = 'level1' | 'level2' | 'level3' | 'final'

export type LevelData = {
	title: string
	paintings: PaintingId[]
	password?: {
		player1: string
		player2: string
	}
}

export const levels: Record<LevelId, LevelData> = {
	'level1': {
		title: 'Level 1',
		paintings: [
			'momAndDad',
			'harmonizing',
			'prodigalSon',
			'chair'
		]
	},
	'level2': {
		title: 'Level 2',
		paintings: [
			'money',
			'venice',
			'mug',
			'lady'
		],
		password: {
			player1: 'venice',
			player2: 'money'
		}
	},
	'level3': {
		title: 'Level 3',
		paintings: [
			'dogLion',
			'stillLife',
			'sebastian',
			'cleopatra'

		],
		password: {
			player1: 'beasts',
			player2: 'fruits'
		}
	},
	'final': {
		title: 'Final',
		paintings: [
		],
		password: {
			player1: 'tmp1',
			player2: 'tmp2'
		}
	}
}
