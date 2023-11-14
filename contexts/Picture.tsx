import { ReactNode, createContext, useState, useContext } from 'react'
import { CameraCapturedPicture } from 'expo-camera'

type PictureContextType = {
	picture: CameraCapturedPicture | null
	setPicture: (picture: CameraCapturedPicture) => void
}

export const PictureContext = createContext({} as PictureContextType)

export function usePicture() {
	const picture = useContext(PictureContext)
	return picture	
}

type PictureProviderProps = {
	children: ReactNode
}

export function PictureProvider({children}: PictureProviderProps) {
	const [picture, setPicture] = useState<CameraCapturedPicture | null>(null)

	return (
		<PictureContext.Provider
			value={{
				picture,
				setPicture,
			}}
		>
			{children}
		</PictureContext.Provider>
	)
}
