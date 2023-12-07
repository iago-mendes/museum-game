import {Picker} from '@react-native-picker/picker'

import { Container, Text, View } from '../styles/ThemedComponents'
import { Player } from '../contexts/Player'
import { StyleSheet } from 'react-native'
import { colors, fontSizes } from '../styles/theme'
import { useState } from 'react'
import { ButtonWithIcon } from './ButtonWIthIcon'
import { BulletList } from './BulletList'

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

			<BulletList
				title="Character Perks and Traits"
				list={[
					'Bob Doe is an <<Econ Major>>, and a member of the archery club.',
					'Player 1 Minors in <<Psychology>>, and is a member of the Pottery Co-op.',
					'Player 2 is a 3-2 <<Engineering Major>>, minors in French, and is a member of Ocircus.'
				]}
			/>

			<ButtonWithIcon
				text="Continue"
				icon="arrow-right"
				onPress={() => handleContinue()}
				disabled={tmpPlayer == 'none'}
				style={styles.button}
			/>
    </Container>
  )
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		paddingHorizontal: 40,
		paddingVertical: 75,
	},
	group: {
		width: '100%',
		alignItems: 'center',
		gap: 40,
		marginTop: 200,
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
	button: {
		alignSelf: 'flex-end',
	}
})
