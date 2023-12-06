import { ReactNode, createContext, useState, useContext, useEffect } from 'react'
import { PaintingId } from '../db//paintingIds'
import SelectPlayer from '../components/SelectPlayer'

export type Player = 'player1' | 'player2' | 'none'

type PlayerContextType = {
	player: Player
	updatePlayer: (value: string | null) => void
	unlockedPaintings: Set<PaintingId>
	addUnlockedPainting: (id: PaintingId) => void
	addImportantInfo: (id: PaintingId, info: string[]) => void
	importantInfo: Map<PaintingId, string[]>
	reset: () => void
}

export const PlayerContext = createContext({} as PlayerContextType)

export function usePlayer() {
	const player = useContext(PlayerContext)
	return player	
}

export function PlayerProvider({children}: {children: ReactNode}) {
	const [player, setPlayer] = useState<Player>('none')
	const [unlockedPaintings, setUnlockedPaintings] = useState<Set<PaintingId>>(new Set())
	const [importantInfo, setImportantInfo] = useState<Map<PaintingId, string[]>>(new Map())

	useEffect(() => {
		setUnlockedPaintings(new Set())
	}, [player])

	function updatePlayer(value: string | null) {
		if (!value || (value != 'player1' && value != 'player2')) {
			setPlayer('none')
			return
		}

		setPlayer(value)
	}

	function addUnlockedPainting(id: PaintingId) {
		setUnlockedPaintings(set => set.add(id))
	}

	function addImportantInfo(id: PaintingId, info: string[]) {
		setImportantInfo(map => new Map(map.set(id, info)))
	}

	function reset() {
		setPlayer('none')
		setUnlockedPaintings(new Set())
		setImportantInfo(new Map())
	}

	return (
		<PlayerContext.Provider
			value={{
				player,
				updatePlayer,
				unlockedPaintings,
				addUnlockedPainting,
				addImportantInfo,
				importantInfo,
				reset,
			}}
		>
			{player == 'none' ? (
				<SelectPlayer player={player} updatePlayer={updatePlayer} />
			) : (
				children
			)}
		</PlayerContext.Provider>
	)
}
