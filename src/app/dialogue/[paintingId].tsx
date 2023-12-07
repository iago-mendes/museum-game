import { useEffect, useRef, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

import { Container, Text, View } from '../../styles/ThemedComponents'
import { dialoguesRecord } from '../../db/dialogues'
import { isPaintingId } from '../../db/paintingIds'
import { DialogueNode, DialogueOption } from '../../db/dialogues'
import { usePlayer } from '../../contexts/Player'
import { colors, fontSizes } from '../../styles/theme'
import { parseText } from '../../utils/parseText'
import { paintingsInfo } from '../../db/paintingsInfo'
import { ButtonWithIcon } from '../../components/ButtonWIthIcon'

export default function DialogueScreen() {
  const params = useLocalSearchParams<{paintingId?: string}>()
  const [paintingId] = useState(params.paintingId)
  const scrollViewRef = useRef<ScrollView>(null)
  const navigation = useNavigation()

  const {player, unlockedPaintings, addUnlockedPainting, visitedPaintings, addVisitedPainting, addImportantInfo} = usePlayer()

  const [dialogue, setDialogue] = useState<DialogueNode | undefined>(undefined)
  const [shownDialogue, setShownDialogue] = useState<DialogueNode[]>([])
  const [shownOptions, setShownOptions] = useState<DialogueOption[]>([])
  const [showNextButton, setShowNextButton] = useState(true)
  const [showNextDialogue, setShowNextDialogue] = useState(true)
  const [showExitButton, setShowExitButton] = useState(false)

  useEffect(() => {
    if (!paintingId || !isPaintingId(paintingId) || player == 'none') {
      setDialogue(undefined)
      setShownDialogue([])
      return
    }

    //if (paintingId == 'incorrect') return

    navigation.setOptions({title: paintingsInfo[paintingId].title})

    const dialogueOptions = dialoguesRecord[paintingId]

    if (visitedPaintings.has(paintingId)){
      setDialogue(dialogueOptions.visited)
    } else {
      if (!dialogueOptions.locked || unlockedPaintings.has(paintingId)) {
        setDialogue(dialogueOptions[player])
      } else {
        setDialogue(dialogueOptions.locked)
      }
    }
  }, [paintingId, player])

  useEffect(() => {
    if (showNextDialogue) {
      addNextDialogue()
    }
  }, [dialogue, showNextDialogue])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null
    if (!showNextButton && shownOptions.length == 0) {
      timeoutId = setTimeout(() => setShowExitButton(true), 1000)
    } else {
      timeoutId = setTimeout(() => setShowExitButton(false), 1000)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [dialogue, showNextButton, shownOptions])

  function addNextDialogue() {
    if (!isPaintingId(paintingId) || !dialogue) {
      return
    }

    if(dialogue.newVisitedPainting){
      addVisitedPainting(dialogue.newVisitedPainting)
    }

    if (dialogue.newUnlockedPainting) {
      addUnlockedPainting(dialogue.newUnlockedPainting)
    }

    if (dialogue.importantInfo) {
      addImportantInfo(paintingId, dialogue.importantInfo)
    }

    setShownDialogue(shownDialogue => !dialogue ? shownDialogue : [...shownDialogue, dialogue])

    if (dialogue.options) {
      const optionsCopy = [...dialogue.options]
      setTimeout(() => setShownOptions(optionsCopy), 1000)
      setShowNextButton(false)
    }

    scrollViewRef.current?.scrollToEnd()

    if (dialogue.next) {
      setDialogue(dialogue.next)
      setShowNextButton(true)
    } else {
      setShowNextButton(false)
    }

    setShowNextDialogue(false)
  }

  function selectOption(option: DialogueOption) {
    setDialogue(option.dialogue)
    setShowNextDialogue(true)
    setShownOptions([])
  }

/** 
  if (paintingId == 'incorrect') return (
    <Container>
    <Text>Going here would violate the Laws of Space and Time!</Text>
  </Container>
  )
*/

  if (!paintingId || !isPaintingId(paintingId)) return (
    <Container>
      <Text>Error: invalid painting ID!</Text>
    </Container>
  )

  if (player == 'none') return (
    <Container>
      <Text>Error: you need to select a player!</Text>
    </Container>
  )

  return (
    <Container style={styles.screenContainer}>
      <View style={styles.dialogueWrapper}>
        <ScrollView ref={scrollViewRef} style={styles.dialogueContainer}>
          {shownDialogue.map((item, index) => (
            <View key={index} style={styles.nodeContainer}>
              <Text style={styles.speaker}>{item.speaker}</Text>
              <Text>
              {parseText(item.text).map(({text, bold}, index) => (
                <Text style={bold ? styles.boldText : {}} key={index}>{text}</Text>
              ))}
              </Text>
            </View>
          ))}
          <View style={styles.optionsContainer}>
            {shownOptions.length > 0 && shownOptions.map(option => (
              <TouchableOpacity key={option.key} onPress={() => selectOption(option)} style={styles.optionButton}>
                <Text style={styles.optionPrompt}>{option.key}) {option.prompt}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      {showNextButton && (
        <ButtonWithIcon
          text="Next"
          icon="arrow-right"
          onPress={() => setShowNextDialogue(true)}
          style={styles.nextButton}
        />
      )}
      {showExitButton && (
        <ButtonWithIcon
          text="Return to map"
          icon="arrow-left"
          onPress={() => router.push('/(tabs)/')}
          style={styles.exitButton}
        />
      )}
    </Container>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    justifyContent: 'flex-start'
  },
  dialogueWrapper: {
    width: '100%',
    height: '90%',
    borderWidth: 2,
    borderColor: colors.highlight,
    borderRadius: 10,
    marginBottom: 10,
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
  optionsContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 5,
    marginBottom: 20,
  },
  optionButton: {
    width: '75%',
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  optionPrompt: {
    fontSize: fontSizes.large,
    color: colors.background,
    fontWeight: 'bold',
  },
  nextButton: {
    alignSelf: 'flex-end',
  },
  exitButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row-reverse',
  },
  boldText: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  speaker: {
    fontWeight: 'bold',
  },
})
