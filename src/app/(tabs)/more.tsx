import { ScrollView, StyleSheet, View } from 'react-native'

import { Container } from '../../styles/ThemedComponents'
import { usePlayer } from '../../contexts/Player'
import { ButtonWithIcon } from '../../components/ButtonWIthIcon'
import { CharacterDetails } from '../../components/CharacterDetails'
import { MechanicDetails } from '../../components/MechanicDetails'
import { WinningDetails } from '../../components/WinningDetails'

export default function MoreScreen() {
  const {reset} = usePlayer()

  return (
    <Container>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <ButtonWithIcon
            text="Reset game"
            icon="refresh"
            onPress={() => reset()}
            style={styles.resetButton}
          />

          <CharacterDetails />
          
          <MechanicDetails />

          <WinningDetails />
        </View>
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 50,
  },
  resetButton: {
    alignSelf: 'center',
  },
})
