import { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Button } from 'react-native'

import { Container, Text, View } from '../../components/Themed'
import { dialoguesRecord } from '../../db/dialogues'
import { DialogueNode, DialogueOption, PaintingId, isPaintingId } from '../../db/types'
import { usePlayer } from '../../contexts/Player'

export default function DialogueScreen() {
  const params = useLocalSearchParams<{paintingId?: string}>()
  const [paintingId] = useState(params.paintingId)

  const {player, unlockedPaintings, addUnlockedPainting} = usePlayer()

  let dialogue: DialogueNode | undefined = undefined

  const [shownDialogue, setShownDialogue] = useState<DialogueNode[]>([])
  const [shownOptions, setShownOptions] = useState<DialogueOption[]>([])
  let intervalId: NodeJS.Timeout | undefined = undefined

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
    intervalId = setInterval(addNextDialogue, 2000)
  }

  function stopDialogueLoop() {
    if (intervalId) {
      clearInterval(intervalId)
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
    <Container>
      {shownDialogue.map((item, index) => (
        <View key={index}>
          <Text>{item.speaker}:</Text>
          <Text>{item.text}</Text>
        </View>
      ))}
      <View>
        {shownOptions.length > 0 && shownOptions.map(option => (
          <Button key={option.key} title={option.prompt} onPress={() => selectOption(option)} />
        ))}
      </View>
    </Container>
  )
}