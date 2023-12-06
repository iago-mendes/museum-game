import { ScrollView, StyleSheet } from 'react-native'

import { levels } from '../../db/levels'
import { Container } from '../../styles/ThemedComponents'
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
