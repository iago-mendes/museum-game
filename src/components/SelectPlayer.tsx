import {Picker} from '@react-native-picker/picker'

import { Container, Text, View } from '../styles/ThemedComponents'
import { Player } from '../contexts/Player'
import { ScrollView, StyleSheet } from 'react-native'
import { colors, fontSizes } from '../styles/theme'
import { useState } from 'react'
import { ButtonWithIcon } from './ButtonWIthIcon'
import { CharacterDetails } from './CharacterDetails'

type SelectPlayerProps = {
	updatePlayer: (value: string | null) => void
}

export default function SelectPlayer({updatePlayer}: SelectPlayerProps) {
	const [tmpPlayer, setTmpPlayer] = useState<Player>('none')

	function handleContinue() {
		if (tmpPlayer != 'none') {
			updatePlayer(tmpPlayer)
		}
	}

  return (
    <Container style={styles.container}>
      <ScrollView style={styles.scrollView}>
				<View style={styles.group}>
					<Text style={styles.title}>Select your player</Text>
					<Picker
						selectedValue={tmpPlayer}
						onValueChange={value => setTmpPlayer(value)}
						style={styles.picker}
					>
							<Picker.Item label="(none)" value="none" />
							<Picker.Item label="Player 1" value="player1" />
							<Picker.Item label="Player 2" value="player2" />
					</Picker>
				</View>

				<CharacterDetails />
      </ScrollView>


      <View style={styles.buttonContainer}>
				<ButtonWithIcon
					text="Continue"
					icon="arrow-right"
					onPress={() => handleContinue()}
					disabled={tmpPlayer == 'none'}
				/>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
    paddingTop: 60,
	},
	scrollView: {
    paddingHorizontal: 30,
  },
	group: {
		width: '100%',
		alignItems: 'center',
		gap: 40,
		marginTop: 100,
		marginBottom: 75
	},
	title: {
		fontSize: fontSizes.large,
		fontWeight: 'bold',
	},
	picker: {
		width: '100%',
		backgroundColor: colors.highlight,
		color: colors.text,
		borderRadius: 10,
	},
	buttonContainer: {
    padding: 20,
    width: '100%',
    alignItems: 'flex-end',
    borderTopWidth: 2,
    borderColor: colors.highlight,
	},
})
