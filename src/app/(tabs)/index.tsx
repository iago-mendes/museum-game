import { ScrollView, StyleSheet } from 'react-native'

import { levels } from '../../db/levels'
import { paintingsInfo } from '../../db/paintingsInfo'
import { Container, Text, View } from '../../styles/ThemedComponents'
import { colors, fontSizes } from '../../styles/theme'
import { usePlayer } from '../../contexts/Player'

export default function MapScreen() {
  const {importantInfo} = usePlayer()

  return (
    <Container>
      <ScrollView style={styles.scrollView}>
        <View style={styles.levelContainer}>
          <Text style={styles.levelTitle}>- Level 1 -</Text>
          <View style={styles.levelPaintingList}>
            {levels.level1.map(id => (
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
        <View style={styles.levelContainer}>
          <Text style={styles.levelTitle}>- Level 2 -</Text>
          <View style={styles.levelPaintingList}>
            {levels.level2.map(id => (
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
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    padding: 20,
  },
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
