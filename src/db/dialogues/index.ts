import { PaintingId } from '../paintingIds'
import { chairDialogues } from './chair'
import { harmonizingDialogues } from './harmonizing'
import { momAndDad } from './momAndDad'
import { moneyDialogues } from './money'
import { prodigalSon } from './prodigalSon'
import { veniceDialogues } from './venice'

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
	importantInfo?: string[]
}

export type DialogueOption = {
	key: string
	prompt: string
	dialogue: DialogueNode
}

export const dialoguesRecord: Record<PaintingId, PaintingDialogues> = {
	'momAndDad': momAndDad,
	'harmonizing': harmonizingDialogues,
	'prodigalSon': prodigalSon,
	'chair': chairDialogues,
	'money': moneyDialogues,
	'venice': veniceDialogues
}
