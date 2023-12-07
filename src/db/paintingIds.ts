const paintingIds = [
	'momAndDad',
	'prodigalSon',
	'harmonizing',
	'chair',
	'money',
	'venice',
	'lady',
	'mug',
	'stillLife',
	'sebastian',
	'dogLion',
	'cleopatra',
	'michael',
	'incorrect'
] as const

export type PaintingId = typeof paintingIds[number]

export function isPaintingId(id: string | undefined): id is PaintingId {
	return paintingIds.includes(id as PaintingId);
}
