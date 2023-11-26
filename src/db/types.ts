const paintingIds = [
	'harmonizing'
] as const

export type PaintingId = typeof paintingIds[number]

export function isPaintingId(id: string): id is PaintingId {
	return typeof id === 'string' && paintingIds.includes(id as PaintingId);
}

export type DialogueNode = {
	text: string
	speaker: string
	next: DialogueNode | null
}

export type PaintingDialogueOptions = {
	player1: {
		locked: DialogueNode | null
		unlocked: DialogueNode
	}
	player2: {
		locked: DialogueNode | null
		unlocked: DialogueNode
	}
}
