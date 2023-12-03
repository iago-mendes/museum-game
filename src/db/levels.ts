import { PaintingId } from './paintingIds'

export type Level = {
	title: string
	paintings: PaintingId[]
	password?: {
		player1: string
		player2: string
	}
}

export const levels: Level[] = [
	{
		title: 'Level 1',
		paintings: [
			'momAndDad',
			'harmonizing',
			'prodigalSon',
			'chair'
		]
	},
	{
		title: 'Level 2',
		paintings: [
			'money',
			'venice',
		],
		password: {
			player1: 'venice',
			player2: 'money'
		}
	},
	{
		title: 'Level 3',
		paintings: [
		],
		password: {
			player1: 'tmp1',
			player2: 'tmp2'
		}
	},
	{
		title: 'Final',
		paintings: [
		],
		password: {
			player1: 'tmp1',
			player2: 'tmp2'
		}
	}
]
