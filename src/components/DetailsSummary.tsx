import { StyleSheet } from 'react-native'

import { Container } from '../styles/ThemedComponents'
import { fontSizes } from '../styles/theme'
import { ButtonWithIcon } from './ButtonWIthIcon'
import { MechanicDetails } from './MechanicDetails'
import { WinningDetails } from './WinningDetails'

type DetailsSummaryProps = {
  onContinue: () => void
}

export function DetailsSummary({onContinue}: DetailsSummaryProps) {

  return (
    <Container style={styles.screenContainer}>
      <MechanicDetails />

      <WinningDetails />
      
      <ButtonWithIcon
        text="Continue"
        icon="arrow-right"
        onPress={() => onContinue()}
				style={styles.button}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: 75,
    paddingBottom: 20,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    gap: 20,
  },
  title: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },
  button: {
		alignSelf: 'flex-end',
	},
})
