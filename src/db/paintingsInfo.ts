import { PaintingId } from './paintingIds'

type PaintingInfo = {
	title: string
	date: string
}

export const paintingsInfo: Record<PaintingId, PaintingInfo> = {
	momAndDad: {
		title: 'The Plough and The Song',
		date: '1947',
	},
	harmonizing: {
		title: 'Harmonizing',
		date: '1944',
	},
	prodigalSon: {
		title: 'The Prodigal Son',
		date: '1905',
	},
	chair: {
		title: 'Do you want us here or not (MHR) - Bench',
		date: '2021'
	},
}