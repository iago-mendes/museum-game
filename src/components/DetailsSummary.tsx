import { ScrollView, StyleSheet, View } from 'react-native'

import { Container } from '../styles/ThemedComponents'
import { colors } from '../styles/theme'
import { ButtonWithIcon } from './ButtonWIthIcon'
import { MechanicDetails } from './MechanicDetails'
import { WinningDetails } from './WinningDetails'

type DetailsSummaryProps = {
  onContinue: () => void
}

export function DetailsSummary({onContinue}: DetailsSummaryProps) {

  return (
    <Container style={styles.screenContainer}>
      <ScrollView style={styles.scrollView}>
        <MechanicDetails />
        <View style={styles.spacer} />
        <WinningDetails />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <ButtonWithIcon
          text="Continue"
          icon="arrow-right"
          onPress={() => onContinue()}
        />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: 60,
    justifyContent: 'space-between',
  },
  scrollView: {
    paddingHorizontal: 30,
  },
  spacer: {
    height: 20,
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
    alignItems: 'flex-end',
    borderTopWidth: 2,
    borderColor: colors.highlight,
	},
})
