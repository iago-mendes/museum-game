import { PaintingId } from '../paintingIds'
import { chairDialogues } from './chair'
import { harmonizingDialogues } from './harmonizing'
import { momAndDad } from './momAndDad'
import { moneyDialogues } from './money'
import { prodigalSon } from './prodigalSon'
import { veniceDialogues } from './venice'
import { incorrectDialogues } from './incorrect'
import { dogLionDialogues } from "./dogLion"
import { uniqueDialogue } from "./mug"
import { ladyDialogues } from './lady'
import { cleopatraDialogues } from './cleopatra'
import { stillLifeDialogues } from './stillLife'

export type PaintingDialogues = {
	locked?: DialogueNode
	visited?: DialogueNode
	player1: DialogueNode
	player2: DialogueNode
}

export type DialogueNode = {
	text: string
	speaker: string
	next?: DialogueNode
	newUnlockedPainting?: PaintingId
	newVisitedPainting?: PaintingId
	removeVisitedPainting?: PaintingId
	options?: DialogueOption[]
	importantInfo?: string[]
	addImportantInfo?: string
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
	'venice': veniceDialogues,
	'incorrect': incorrectDialogues,
	lady: ladyDialogues,
	mug: uniqueDialogue,
	stillLife: stillLifeDialogues,
	sebastian: {
		locked: undefined,
		visited: undefined,
		player1: {
			text: '',
			speaker: '',
			next: undefined,
			newUnlockedPainting: undefined,
			newVisitedPainting: undefined,
			options: undefined,
			importantInfo: undefined
		},
		player2: {
			text: '',
			speaker: '',
			next: undefined,
			newUnlockedPainting: undefined,
			newVisitedPainting: undefined,
			options: undefined,
			importantInfo: undefined
		}
	},
	dogLion: dogLionDialogues,
	cleopatra: cleopatraDialogues,
	michael: {
		locked: undefined,
		visited: undefined,
		player1: {
			text: '',
			speaker: '',
			next: undefined,
			newUnlockedPainting: undefined,
			newVisitedPainting: undefined,
			options: undefined,
			importantInfo: undefined
		},
		player2: {
			text: '',
			speaker: '',
			next: undefined,
			newUnlockedPainting: undefined,
			newVisitedPainting: undefined,
			options: undefined,
			importantInfo: undefined
		}
	}
}
