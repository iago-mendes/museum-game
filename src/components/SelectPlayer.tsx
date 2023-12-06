import {Picker} from '@react-native-picker/picker'

import { Container, Text } from '../styles/ThemedComponents'
import { Player } from '../contexts/Player'

type SelectPlayerProps = {
	player: Player
	updatePlayer: (value: string | null) => void
}

export default function SelectPlayer({player, updatePlayer}: SelectPlayerProps) {
  return (
    <Container>
      <Text>Select your player:</Text>
      <Picker
        selectedValue={player}
        onValueChange={value => updatePlayer(value)}
        style={{backgroundColor: 'gray', width: '100%'}}
      >
          <Picker.Item label="(none)" value="none" />
          <Picker.Item label="Player 1" value="player1" />
          <Picker.Item label="Player 2" value="player2" />
      </Picker>
    </Container>
  )
}
