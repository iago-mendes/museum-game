import { ReactNode, createContext, useState, useContext } from 'react'

type Player = 'player1' | 'player2' | 'none'

type PlayerContextType = {
	player: Player | null
	updatePlayer: (value: string | null) => void
}

export const PlayerContext = createContext({} as PlayerContextType)

export function usePlayer() {
	const player = useContext(PlayerContext)
	return player	
}

export function PlayerProvider({children}: {children: ReactNode}) {
	const [player, setPlayer] = useState<Player>('none')

	function updatePlayer(value: string | null) {
		if (!value || (value != 'player1' && value != 'player2')) {
			setPlayer('none')
			return
		}

		setPlayer(value)
	}

	return (
		<PlayerContext.Provider
			value={{
				player,
				updatePlayer,
			}}
		>
			{children}
		</PlayerContext.Provider>
	)
}
