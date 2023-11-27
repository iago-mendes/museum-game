import { PaintingId, PaintingDialogues } from '../types'
import { chairDialogues } from './chair'
import { harmonizingDialogues } from './harmonizing'

export const dialoguesRecord: Record<PaintingId, PaintingDialogues> = {
	'harmonizing': harmonizingDialogues,
	'chair': chairDialogues,
}
