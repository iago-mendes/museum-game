import { PaintingId } from '../paintingIds'
import { chairDialogues } from './chair'
import { harmonizingDialogues } from './harmonizing'

export type PaintingDialogues = {
	locked?: DialogueNode
	player1: DialogueNode
	player2: DialogueNode
}

export type DialogueNode = {
	text: string
	speaker: string
	next?: DialogueNode
	newUnlockedPainting?: PaintingId
	options?: DialogueOption[]
}

export type DialogueOption = {
	key: string
	prompt: string
	dialogue: DialogueNode
}

export const dialoguesRecord: Record<PaintingId, PaintingDialogues> = {
	'harmonizing': harmonizingDialogues,
	'chair': chairDialogues,
}
