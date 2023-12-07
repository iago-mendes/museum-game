import { useEffect, useRef, useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import { Container, Text, View } from '../styles/ThemedComponents'
import { DialogueNode } from '../db/dialogues'
import { colors, fontSizes } from '../styles/theme'
import { parseText } from '../utils/parseText'
import { ButtonWithIcon } from './ButtonWIthIcon'
import { introductionDialogue } from '../db/dialogues/introduction'

type IntroductionProps = {
  onExit: () => void
}

export function Introduction({onExit}: IntroductionProps) {
  const scrollViewRef = useRef<ScrollView>(null)

  const [dialogue, setDialogue] = useState<DialogueNode | undefined>(introductionDialogue)
  const [shownDialogue, setShownDialogue] = useState<DialogueNode[]>([])
  const [showNextButton, setShowNextButton] = useState(true)
  const [showNextDialogue, setShowNextDialogue] = useState(true)
  const [showExitButton, setShowExitButton] = useState(false)

  useEffect(() => {
    if (showNextDialogue) {
      addNextDialogue()
    }
  }, [dialogue, showNextDialogue])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null
    if (!showNextButton) {
      timeoutId = setTimeout(() => setShowExitButton(true), 1000)
    } else {
      timeoutId = setTimeout(() => setShowExitButton(false), 1000)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [dialogue, showNextButton])

  function addNextDialogue() {
    if (!dialogue) {
      return
    }

    setShownDialogue(shownDialogue => !dialogue ? shownDialogue : [...shownDialogue, dialogue])

    scrollViewRef.current?.scrollToEnd()

    if (dialogue.next) {
      setDialogue(dialogue.next)
      setShowNextButton(true)
    } else {
      setShowNextButton(false)
    }

    setShowNextDialogue(false)
  }

  return (
    <Container style={styles.screenContainer}>
      <Text style={styles.title}>Introduction</Text>
      <View style={styles.dialogueWrapper}>
        <ScrollView ref={scrollViewRef} style={styles.dialogueContainer}>
          {shownDialogue.map((item, index) => (
            <View key={index} style={styles.nodeContainer}>
              <Text>{item.speaker}:</Text>
              <Text>
                {parseText(item.text).map(({text, bold}, index) => (
                  <Text style={bold ? styles.boldText : {}} key={index}>{text}</Text>
                ))}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonWithIcon
          text="Skip"
          icon="close"
          onPress={() => onExit()}
          style={styles.leftButton}
        />
        {showNextButton && (
          <ButtonWithIcon
            text="Next"
            icon="arrow-right"
            onPress={() => setShowNextDialogue(true)}
          />
        )}
        {showExitButton && (
          <ButtonWithIcon
            text="Continue"
            icon="arrow-right"
            onPress={() => onExit()}
          />
        )}
        </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: 75,
    paddingHorizontal: 25,
    justifyContent: 'flex-start',
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
  boldText: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
})
