import { ReactNode, createContext, useState, useContext, useEffect } from 'react'
import { PaintingId } from '../db//paintingIds'
import SelectPlayer from '../components/SelectPlayer'
import { Introduction } from '../components/Introduction'
import { Welcome } from '../components/Welcome'
import { DetailsSummary } from '../components/DetailsSummary'
import { LevelId } from '../db/levels'

export type Player = 'player1' | 'player2' | 'none'

type PlayerContextType = {
	player: Player
	updatePlayer: (value: string | null) => void
	unlockedPaintings: Set<PaintingId>
	addUnlockedPainting: (id: PaintingId) => void
	visitedPaintings: Set<PaintingId>
	addVisitedPainting: (id: PaintingId) => void
	addImportantInfo: (id: PaintingId, info: string[]) => void
	importantInfo: Map<PaintingId, string[]>
	reset: () => void
	unlockedLevels: LevelId[]
	unlockLevel: (id: LevelId) => void
}

export const PlayerContext = createContext({} as PlayerContextType)

export function usePlayer() {
	const player = useContext(PlayerContext)
	return player	
}

export function PlayerProvider({children}: {children: ReactNode}) {
	const [showWelcome, setShowWelcome] = useState(true)
	const [showIntroduction, setShowIntroduction] = useState(true)
	const [showDetailsSummary, setShowDetailsSummary] = useState(true)
	const [player, setPlayer] = useState<Player>('none')
	
	const [unlockedPaintings, setUnlockedPaintings] = useState<Set<PaintingId>>(new Set())
	const [visitedPaintings, setVisitedPaintings] = useState<Set<PaintingId>>(new Set())
	const [importantInfo, setImportantInfo] = useState<Map<PaintingId, string[]>>(new Map())
	const [unlockedLevels, setUnlockedLevels] = useState<LevelId[]>(['level1'])

	useEffect(() => {
		setUnlockedPaintings(new Set())
	}, [player])

	useEffect(() => {
		setVisitedPaintings(new Set())
	}, [player])

	function updatePlayer(value: string | null) {
		if (!value || (value != 'player1' && value != 'player2')) {
			setPlayer('none')
			return
		}

		setPlayer(value)
	}

	function addUnlockedPainting(id: PaintingId) {
		setUnlockedPaintings(set => new Set(set.add(id)))
	}

	function addVisitedPainting(id: PaintingId) {
		setVisitedPaintings(set => set.add(id))
	}

	function addImportantInfo(id: PaintingId, info: string[]) {
		setImportantInfo(map => new Map(map.set(id, info)))
	}

	function reset() {
		setShowWelcome(true)
		setShowIntroduction(true)
		setShowDetailsSummary(true)
		setPlayer('none')
		
		setUnlockedPaintings(new Set())
		setVisitedPaintings(new Set())
		setImportantInfo(new Map())
		setUnlockedLevels(['level1'])
	}

	function unlockLevel(id: LevelId) {
		setUnlockedLevels(prev => [...prev, id])
	}

	return (
		<PlayerContext.Provider
			value={{
				player,
				updatePlayer,
				unlockedPaintings,
				addUnlockedPainting,
				visitedPaintings,
				addVisitedPainting,
				addImportantInfo,
				importantInfo,
				reset,
				unlockedLevels,
				unlockLevel,
			}}
		>
			{showWelcome ? (
				<Welcome onStart={() => setShowWelcome(false)} />
			) : showIntroduction ? (
				<Introduction onExit={() => setShowIntroduction(false)} />
			) : showDetailsSummary ? (
				<DetailsSummary onContinue={() => setShowDetailsSummary(false)} />
			) : player == 'none' ? (
				<SelectPlayer updatePlayer={updatePlayer} />
			) : (
				children
			)}
		</PlayerContext.Provider>
	)
}
