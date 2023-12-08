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
	money: {
		title: 'Is it Real?',
		date: '1890'
	},
	venice: {
		title: 'View of Venice',
		date: '1841'
	},
	mug: {
		title: 'Bear-shaped Drinking Vessel',
		date: '1710-50'
	},
	incorrect: {
		title: 'The place where none shall go...yet',
		date: 'not applicable'
	},
	lady: {
		title: '',
		date: ''
	},
	stillLife: {
		title: '',
		date: ''
	},
	sebastian: {
		title: '',
		date: ''
	},
	dogLion: {
		title: '',
		date: ''
	},
	cleopatra: {
		title: '',
		date: ''
	},
	michael: {
		title: '',
		date: ''
	}
}
