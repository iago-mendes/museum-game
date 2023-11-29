import { useEffect, useRef, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import { Container, Text, View } from '../../styles/ThemedComponents'
import { dialoguesRecord } from '../../db/dialogues'
import { isPaintingId } from '../../db/paintingIds'
import { DialogueNode, DialogueOption } from '../../db/dialogues'
import { usePlayer } from '../../contexts/Player'
import { colors, fontSizes } from '../../styles/theme'

export default function DialogueScreen() {
  const params = useLocalSearchParams<{paintingId?: string}>()
  const [paintingId] = useState(params.paintingId)
  const scrollViewRef = useRef<ScrollView>(null)

  const {player, unlockedPaintings, addUnlockedPainting} = usePlayer()

  const [dialogue, setDialogue] = useState<DialogueNode | undefined>(undefined)
  const [shownDialogue, setShownDialogue] = useState<DialogueNode[]>([])
  const [shownOptions, setShownOptions] = useState<DialogueOption[]>([])
  const [showNextButton, setShowNextButton] = useState(true)
  const [showNextDialogue, setShowNextDialogue] = useState(true)

  useEffect(() => {
    if (!paintingId || !isPaintingId(paintingId) || player == 'none') {
      setDialogue(undefined)
      setShownDialogue([])
      return
    }

    const dialogueOptions = dialoguesRecord[paintingId]

    if (!dialogueOptions.locked || unlockedPaintings.has(paintingId)) {
      setDialogue(dialogueOptions[player])
    } else {
      setDialogue(dialogueOptions.locked)
    }
  }, [paintingId, player])

  useEffect(() => {
    if (showNextDialogue) {
      addNextDialogue()
    }
  }, [dialogue, showNextDialogue])

  function addNextDialogue() {
    console.log(dialogue)
    if (!dialogue) {
      return
    }

    if (dialogue.newUnlockedPainting) {
      addUnlockedPainting(dialogue.newUnlockedPainting)
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
              <Text>{item.speaker}:</Text>
              <Text>{item.text}</Text>
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
        <TouchableOpacity onPress={() => setShowNextDialogue(true)} style={styles.nextButton}>
          <Text style={styles.nextContent}>Next</Text>
          <FontAwesome name="arrow-right" style={styles.nextContent} />
        </TouchableOpacity>
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
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  nextContent: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: fontSizes.large,
  },
})
