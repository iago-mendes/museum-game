import { ReactNode, createContext, useState, useContext } from 'react'
import { CameraCapturedPicture } from 'expo-camera'
import { router } from 'expo-router'

type PictureContextType = {
	picture: CameraCapturedPicture | null
	scanPicture: (picture: CameraCapturedPicture) => void
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

	function scanPicture(picture: CameraCapturedPicture) {
		setPicture(picture)
		router.push('/(tabs)/three')
	}

	return (
		<PictureContext.Provider
			value={{
				picture,
				scanPicture,
			}}
		>
			{children}
		</PictureContext.Provider>
	)
}
