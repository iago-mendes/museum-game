const paintingIds = [
	'harmonizing',
	'chair'
] as const

export type PaintingId = typeof paintingIds[number]

export function isPaintingId(id: string): id is PaintingId {
	return typeof id === 'string' && paintingIds.includes(id as PaintingId);
}

type DialogueOption = {
	key: string
	prompt: string
	dialogue: DialogueNode
}

export type DialogueNode = {
	text: string
	speaker: string
	next?: DialogueNode
	newUnlockedPainting?: PaintingId
	options?: DialogueOption[]
}

export type PaintingDialogues = {
	locked?: DialogueNode
	player1: DialogueNode
	player2: DialogueNode
}
