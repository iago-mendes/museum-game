import { StyleSheet } from 'react-native'

import { Container, Text } from '../styles/ThemedComponents'
import { ButtonWithIcon } from './ButtonWIthIcon'

type IntroductionProps = {
  onStart: () => void
}

export function Welcome({onStart}: IntroductionProps) {
  return (
    <Container>
      <Text style={styles.title}>A Museum Odyssey Through Digital and Physical Spacetimes</Text>
      <ButtonWithIcon
        text="Start"
        icon="play"
        onPress={() => onStart()}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 50,
  },
})
