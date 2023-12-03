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
		title: '20th & 21st century',
		paintings: [
			'momAndDad',
			'harmonizing',
			'prodigalSon',
			'chair'
		]
	},
	{
		title: '19th century',
		paintings: [
			'money',
			'venice',
		],
		password: {
			player1: 'venice',
			player2: 'money'
		}
	}
]
