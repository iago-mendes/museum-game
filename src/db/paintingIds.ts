const paintingIds = [
	'momAndDad',
	'prodigalSon',
	'harmonizing',
	'chair',
] as const

export type PaintingId = typeof paintingIds[number]

export function isPaintingId(id: string): id is PaintingId {
	return typeof id === 'string' && paintingIds.includes(id as PaintingId);
}
