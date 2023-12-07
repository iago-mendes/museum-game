import { StyleSheet } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import { Text, View } from '../styles/ThemedComponents'
import { ButtonWithIcon } from './ButtonWIthIcon'
import { colors, fontSizes } from '../styles/theme'
import { ParsedText } from './ParsedText'

type IntroductionProps = {
  title?: string
  list: string[]
}

export function BulletList({title, list}: IntroductionProps) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.list}>
        {list.map(item => (
          <View key={item} style={styles.itemContainer}>
			      <FontAwesome name="circle" style={styles.bullet} />
            <ParsedText text={item} />
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    // marginBottom: 5,
  },
  list: {
    paddingLeft: 20,
  },
  itemContainer: {
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
