import { ScrollView, StyleSheet } from 'react-native'

import { levels } from '../../db/levels'
import { paintingsInfo } from '../../db/paintingsInfo'
import { Container, Text, View } from '../../styles/ThemedComponents'
import { colors, fontSizes } from '../../styles/theme'
import { usePlayer } from '../../contexts/Player'
import { LevelView } from '../../components/LevelView'

export default function MapScreen() {
  return (
    <Container>
      <ScrollView style={styles.scrollView}>
        {levels.map(level => (
          <LevelView level={level} key={level.title} />
        ))}
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    padding: 20,
  },
})
