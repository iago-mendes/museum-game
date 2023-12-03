import { StyleSheet } from "react-native"

import { Level } from "../db/levels"
import { Text, View } from "../styles/ThemedComponents"
import { usePlayer } from "../contexts/Player"
import { paintingsInfo } from "../db/paintingsInfo"
import { colors, fontSizes } from "../styles/theme"

type LevelProps = {
	level: Level
}

export function LevelView({level}: LevelProps) {
  const {importantInfo} = usePlayer()
	
	return (
		<View style={styles.levelContainer}>
			<Text style={styles.levelTitle}>- {level.title} -</Text>
			<View style={styles.levelPaintingList}>
				{level.paintings.map(id => (
					<View key={id} style={styles.paintingContainer}>
						<Text>{paintingsInfo[id].title}</Text>
						<Text>{paintingsInfo[id].date}</Text>
						{importantInfo.get(id) && (
							<View style={styles.importantInfoContainer}>
									<Text style={styles.importantInfoTitle}>Important Info:</Text>
									{importantInfo.get(id)?.map((info, index) => (
										<Text key={index}>    - {info}</Text>
									))}
							</View>
						)}
					</View>
				))}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
  levelContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  levelTitle: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    marginBottom: 5,
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

