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
		title: 'Self-Portrait with Straw Hat and Palette',
		date: '1796'
	},
	stillLife: {
		title: 'Still Life',
		date: '1645'
	},
	sebastian: {
		title: 'St. Sebastian',
		date: '1500'
	},
	dogLion: {
		title: 'Komainu (Korean Dog) and Shishi (Chinese Lion)',
		date: '14th–15th century'
	},
	cleopatra: {
		title: 'Cleopatra',
		date: '1515'
	},
	michael: {
		title: 'St. Michael Fighting the Devil',
		date: '1500'
	}
}
