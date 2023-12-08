import { useEffect, useState } from "react"
import { Alert, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import { LevelData, LevelId } from "../db/levels"
import { Text, View } from "../styles/ThemedComponents"
import { usePlayer } from "../contexts/Player"
import { paintingsInfo } from "../db/paintingsInfo"
import { colors, fontSizes } from "../styles/theme"
import { BulletList } from "./BulletList"

type LevelProps = {
	id: LevelId
	data: LevelData
}

export function LevelView({id: levelId, data: levelData}: LevelProps) {
  const {
		importantInfo,
		player,
		unlockLevel,
		unlockedLevels,
		unlockedPaintings,
	} = usePlayer()
	const [givenPassword, setGivenPassword] = useState('')
	const [unlocked, setUnlocked] = useState(false)
	const [allowSubmitPassword, setAllowSubmitPassword] = useState(true)
	const [showHint, setShowHint] = useState(false)

	useEffect(() => {
		setUnlocked(!levelData.password)
		setGivenPassword('')
		setAllowSubmitPassword(false)
	}, [player])

	useEffect(() => {
		let unlocked = false
		unlockedLevels.forEach(id => {
			if (levelId == id) {
				unlocked = true
			}
		})
		setUnlocked(unlocked)
	}, [unlockedLevels])

	useEffect(() => {
		if (unlocked) {
			setShowHint(false)
			return
		}

		let readyForHint = false
		levelData.paintings.forEach(id => {
			if (unlockedPaintings.has(id)) {
				readyForHint = true
			}
		})

		setShowHint(readyForHint)
	}, [unlocked, unlockedPaintings])

	function updateGivenPassword(input: string) {
		setGivenPassword(input)
		setAllowSubmitPassword(input.length > 0)
	}

	function checkPassword() {
		if (player == 'none' || !levelData.password || !allowSubmitPassword) {
			return
		}

		setAllowSubmitPassword(false)

		if (givenPassword.trim().toLowerCase() == levelData.password[player].toLowerCase()) {
			unlockLevel(levelId)
			Alert.alert("Congrats! You got the right password!")
		} else {
			setAllowSubmitPassword(true)
			Alert.alert("Wrong password! Try again!")
		}
	}

	if (player == 'none') return (
		<View>
			<Text>Error: no player selected!</Text>
		</View>
	)
	
	return (
		<View style={styles.levelContainer}>
			<Text style={styles.levelTitle}>- {levelData.title} -</Text>
			{!unlocked ? (
				<View style={styles.passwordContainer}>
					<TextInput
						onChangeText={input => updateGivenPassword(input)}
						onBlur={() => checkPassword()}
						value={givenPassword}
						placeholder="Level password"
						placeholderTextColor={colors.text+'40'}
						editable={showHint}
						style={[styles.passwordInput, showHint ? styles.inputHint : {}]}
					/>
					<TouchableOpacity
						onPress={() => checkPassword()}
						disabled={!allowSubmitPassword}
						style={[styles.passwordButton, showHint ? styles.buttonHint : {}]}
					>
						<FontAwesome name="arrow-right" style={styles.passwordButtonIcon} />
					</TouchableOpacity>
				</View>
			) : (
				<View style={styles.levelPaintingList}>
					{levelData.paintings.map(id => (
						<View key={id} style={styles.paintingContainer}>
							<Text>{paintingsInfo[id].title}</Text>
							<Text>{paintingsInfo[id].date}</Text>
							{importantInfo.get(id) && (
								<View style={styles.importantInfoContainer}>
									<Text style={styles.importantInfoTitle}>Important Info</Text>
									<BulletList list={importantInfo.get(id) ?? []} />
								</View>
							)}
						</View>
					))}
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
  levelContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 50,
  },
  levelTitle: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    marginBottom: 5,
  },
	passwordContainer: {
		width: '80%',
		flexDirection: 'row',
	},
	passwordInput: {
		width: '90%',
		height: 50,
		color: colors.text,
    borderWidth: 1,
		borderColor: colors.highlight,
		borderBottomLeftRadius: 10,
		borderTopLeftRadius: 10,
    paddingHorizontal: 20,
		paddingVertical: 10,
  },
	inputHint: {
		borderColor: colors.primary,
	},
	passwordButton: {
		backgroundColor: colors.highlight,
    alignItems: 'center',
		justifyContent: 'center',
		width: 50,
		height: 50,
    padding: 10,
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
	},
	buttonHint: {
		backgroundColor: colors.primary,
	},
	passwordButtonIcon: {
		fontSize: fontSizes.large,
		color: colors.background,
	},
  levelPaintingList: {
    gap: 10,
    width: '100%',
  },
  paintingContainer: {
    backgroundColor: colors.highlight,
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
  importantInfoContainer: {
    backgroundColor: colors.highlight,
    borderRadius: 10,
    padding: 10,
  },
  importantInfoTitle: {
    fontWeight: 'bold'
  }
})

