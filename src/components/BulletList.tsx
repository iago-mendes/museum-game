import { StyleSheet, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import { Text } from '../styles/ThemedComponents'
import { colors, fontSizes } from '../styles/theme'
import { ParsedText } from './ParsedText'

type IntroductionProps = {
  title?: string
  subtitle?: string
  list: Array<string | string[]>
}

export function BulletList({title, subtitle, list}: IntroductionProps) {
  return (
    <View>
      {title && (
        <Text style={styles.title}>{title}</Text>
      )}
      {subtitle && (
        <Text>{subtitle}</Text>
      )}
      {list.map((item, i) => typeof item == 'string' ? (
        <View key={i} style={styles.itemContainer}>
          <FontAwesome name="circle" style={styles.bullet} />
          <ParsedText text={item} />
        </View>
      ) : item.map((subitem, j) => (
        <View key={j} style={styles.subitemContainer}>
          <FontAwesome name="circle-o" style={styles.bullet} />
          <ParsedText text={subitem} />
        </View>
      )))}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },
  itemContainer: {
    marginLeft: 20,
    flexDirection: 'row',
    gap: 5,
  },
  subitemContainer: {
    marginLeft: 40,
    flexDirection: 'row',
    gap: 5,
  },
  bullet: {
    color: colors.text,
    fontSize: fontSizes.normal / 2,
    marginTop: fontSizes.normal / 2.5,
  },
  item: {
    textAlign: 'justify',
  },
})
