import { PaintingId } from './paintingIds'

export type LevelId = 'level1' | 'level2' | 'level3' | 'final'

export type LevelData = {
	title: string
	paintings: PaintingId[]
	password?: {
		player1: string
		player2: string
	}
	nextLevel?: LevelId
}

export const levels: Record<LevelId, LevelData> = {
	'level1': {
		title: 'Level 1',
		paintings: [
			'stillLife',
			'momAndDad',
			'harmonizing',
			'prodigalSon',
			'chair'
		],
		nextLevel: 'level2'
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
		},
		nextLevel: 'level3',
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
			player2: 'fruit'
		},
		nextLevel: 'final',
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
