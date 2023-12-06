import {Picker} from '@react-native-picker/picker'

import { Container, Text } from '../styles/ThemedComponents'
import { Player } from '../contexts/Player'
import { Button, StyleSheet } from 'react-native'
import { colors, fontSizes } from '../styles/theme'
import { useState } from 'react'
import { ButtonWithArrow } from './ButtonWIthArrow'

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

			{tmpPlayer != 'none' && (
				<ButtonWithArrow text="Continue" onPress={() => handleContinue()} style={styles.button} />
			)}
    </Container>
  )
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		padding: 40,
		paddingTop: 300,
	},
	title: {
		fontSize: fontSizes.large,
		fontWeight: 'bold',
		marginBottom: 30,
	},
	picker: {
		width: '100%',
		backgroundColor: colors.highlight,
		color: colors.text,
		borderRadius: 10,
	},
	button: {
		alignSelf: 'flex-end',
		marginTop: 350
	}
})
