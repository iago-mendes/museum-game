import { StyleSheet } from 'react-native'
import { levels } from '../../db/levels'
import { paintingsInfo } from '../../db/paintingsInfo'
import { Container, Text, View } from '../../styles/ThemedComponents'
import { colors } from '../../styles/theme'

export default function MapScreen() {

  return (
    <Container>
      <View>
        <Text>Level 1:</Text>
        <View style={styles.levelPaintingList}>
          {levels.level1.map(id => (
            <View key={id} style={styles.paintingContainer}>
              <Text>{paintingsInfo[id].title}</Text>
              <Text>{paintingsInfo[id].date}</Text>
            </View>
          ))}
        </View>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  levelPaintingList: {
    gap: 10,
  },
  paintingContainer: {
    backgroundColor: colors.highlight,
  }
})
