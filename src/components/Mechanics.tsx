import { StyleSheet } from 'react-native'

import { Container } from '../styles/ThemedComponents'
import { colors, fontSizes } from '../styles/theme'
import { ButtonWithIcon } from './ButtonWIthIcon'
import { ParsedText } from './ParsedText'
import { BulletList } from './BulletList'

type MechanicsProps = {
  onContinue: () => void
}

export function Mechanics({onContinue}: MechanicsProps) {

  return (
    <Container style={styles.screenContainer}>
      <BulletList
        title="Important Game Mechanics"
        list={[
          'At the start of each round, players are taken to a time period.',
          'Players may <<scan an artwork>> in order to discover information and clues and progress within the storyline',
          'When <<scanning an artwork>>, players:',
          [
            'Cannot scan a painting from a different time period than the one they are currently in.',
            'Have the ability to unlock more dialogues if they trigger the right sequence of events.',
            'Each has unique traits and perks, which means they may have different experiences scanning the same painting!'
          ]
        ]}
      />

      <BulletList
        title="Win Condition"
        subtitle="Players win when they arrive at the last round and is able to retrieve Bob Doe from whatever trouble he has gotten himself in."
        list={[
          'In order to advance to the next round (or time period), each player must find <<the correct password>>, which is obtained through interacting with artworks, and enter them into their individual devices.',
          [
            'Very important: Each player will need a different password to advance to the next round. Sometimes the password you stumble upon might not be for you, but for your teammate!',
          ]
        ]}
      />
      
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
  dialogueWrapper: {
    width: '100%',
    height: '80%',
    borderWidth: 2,
    borderColor: colors.highlight,
    borderRadius: 10,
  },
  dialogueContainer: {
    width: '100%',
    padding: 5,
    paddingBottom: 20,
  },
  nodeContainer: {
    width: '100%',
    marginBottom: 10,
    backgroundColor: colors.highlight,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  leftButton: {
    flexDirection: 'row-reverse',
  },
  speaker: {
    fontWeight: 'bold',
  },
  button: {
		alignSelf: 'flex-end',
	},
})
