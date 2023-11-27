import { useEffect, useState } from 'react'
import { Container, Text, View } from '../../components/Themed'
import { dialoguesRecord } from '../../db/dialogues'
import { DialogueNode, PaintingId, isPaintingId } from '../../db/types'
import { useLocalSearchParams } from 'expo-router'
import { usePlayer } from '../../contexts/Player'

export default function DialogueScreen() {
  const params = useLocalSearchParams<{paintingId?: string}>()
  const [paintingId] = useState(params.paintingId)

  const {player, unlockedPaintings, addUnlockedPainting} = usePlayer()

  let dialogue: DialogueNode | undefined = undefined

  const [shownDialogue, setShownDialogue] = useState<DialogueNode[]>([])
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

    intervalId = setInterval(addNextDialogue, 1000)

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [paintingId, player])

  function addNextDialogue() {
    if (!dialogue) {
      if (intervalId) {
        clearInterval(intervalId)
      }
      return
    }

    setShownDialogue(shownDialogue => !dialogue ? shownDialogue : [...shownDialogue, dialogue])

    if (dialogue.newUnlockedPainting) {
      addUnlockedPainting(dialogue.newUnlockedPainting)
    }

    dialogue = dialogue.next
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
    </Container>
  )
}