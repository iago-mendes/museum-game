export type PaintingId =
	'harmonizing'

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
