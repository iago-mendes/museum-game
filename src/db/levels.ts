import { PaintingId } from './paintingIds'

type Levels = {
	[key: string]: PaintingId[]
}

export const levels: Levels = {
	level1: [
		'momAndDad',
		'harmonizing',
		'prodigalSon',
		'chair'
	],
	level2: [
		'money',
		'venice',
	],
	level3: [],
	final: []
}