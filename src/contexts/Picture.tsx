import { ReactNode, createContext, useState, useContext } from 'react'
import { CameraCapturedPicture } from 'expo-camera'
import { router } from 'expo-router'
import { Alert } from 'react-native';

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
		if (matchPicture(picture)) {
			setPicture(picture)
			router.push('/(tabs)/scanner/viewer')
		} else {
			Alert.alert("Picture didn't match!");
		}
	}

	// Returns whether the picture matched our database or not.
	function matchPicture(picture: CameraCapturedPicture): boolean {
		// OpenCV code should go here.

		// Temporary code below.
		return Math.random() < 0.5 ? true : false
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
