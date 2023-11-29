import { useEffect, useRef, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import { Container, Text, View } from '../../styles/ThemedComponents'
import { dialoguesRecord } from '../../db/dialogues'
import { DialogueNode, DialogueOption, isPaintingId } from '../../db/types'
import { usePlayer } from '../../contexts/Player'
import { fontSizes } from '../../styles/theme'

export default function DialogueScreen() {
  const params = useLocalSearchParams<{paintingId?: string}>()
  const [paintingId] = useState(params.paintingId)
  const scrollViewRef = useRef<ScrollView>(null)

  const {player, unlockedPaintings, addUnlockedPainting} = usePlayer()

  const [shownDialogue, setShownDialogue] = useState<DialogueNode[]>([])
  const [shownOptions, setShownOptions] = useState<DialogueOption[]>([])

  let dialogue: DialogueNode | undefined = undefined
  let loopId: NodeJS.Timeout | undefined = undefined

  useEffect(() => {
    if (!paintingId || !isPaintingId(paintingId) || player == 'none') {
      dialogue = undefined
      setShownDialogue([])
      return
    }

    const dialogueOptions = dialoguesRecord[paintingId]

    if (!dialogueOptions.locked || unlockedPaintings.has(paintingId)) {
      dialogue = dialogueOptions[player]
    } else {
      dialogue = dialogueOptions.locked
    }

    startDialogueLoop()

    return () => {
      stopDialogueLoop()
    }
  }, [paintingId, player])

  function startDialogueLoop() {
    loopId = setInterval(addNextDialogue, 2000)
  }

  function stopDialogueLoop() {
    if (loopId) {
      clearInterval(loopId)
    }
  }

  function addNextDialogue() {
    if (!dialogue) {
      stopDialogueLoop()
      return
    }

    if (dialogue.newUnlockedPainting) {
      addUnlockedPainting(dialogue.newUnlockedPainting)
    }

    setShownDialogue(shownDialogue => !dialogue ? shownDialogue : [...shownDialogue, dialogue])

    if (dialogue.options) {
      stopDialogueLoop()
      setTimeout(() => dialogue?.options && setShownOptions(dialogue.options), 1000)
      return
    }

    scrollViewRef.current?.scrollToEnd()

    dialogue = dialogue.next
  }

  function selectOption(option: DialogueOption) {
    dialogue = option.dialogue
    setShownOptions([])
    startDialogueLoop()
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
    </Container>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingVertical: 10,
  },
  dialogueContainer: {
    width: '100%',
    paddingHorizontal: 25,
  },
  nodeContainer: {
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#ffffff18',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  optionsContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 5,
  },
  optionButton: {
    width: '75%',
    backgroundColor: '#0a0a58',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  optionPrompt: {
    fontSize: fontSizes.large,
  }
})
