import { useEffect, useState } from 'react'
import { Container, Text, View } from '../../components/Themed'
import { paintingDialogueOptions } from '../../db/paintingDialogueOptions'
import { DialogueNode, PaintingId, isPaintingId } from '../../db/types'
import { useLocalSearchParams } from 'expo-router'

export default function DialogueScreen() {
  const params = useLocalSearchParams<{paintingId?: string}>()
  const [paintingId] = useState(params.paintingId)

  // TODO: replace code below with context for player info.
  const player = 'player2'
  const unlockedPaintings: Set<PaintingId> = new Set(['harmonizing'])

  let dialogue: DialogueNode | null = null

  const [shownDialogue, setShownDialogue] = useState<DialogueNode[]>([])
  let intervalId: NodeJS.Timeout | null = null

  useEffect(() => {
    if (!paintingId || !isPaintingId(paintingId)) {
      dialogue = null
      setShownDialogue([])
      return
    }

    const dialogueOptions = paintingDialogueOptions[paintingId]

    if (!dialogueOptions[player].locked || unlockedPaintings.has(paintingId)) {
      dialogue = dialogueOptions[player].unlocked
    } else {
      dialogue = dialogueOptions[player].locked
    }

    intervalId = setInterval(addNextDialogue, 2000)

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [paintingId])

  function addNextDialogue() {
    if (!dialogue) {
      if (intervalId) {
        clearInterval(intervalId)
      }
      return
    }

    setShownDialogue(shownDialogue => !dialogue ? shownDialogue : [...shownDialogue, dialogue])
    dialogue = dialogue.next
  }

  if (!paintingId || !isPaintingId(paintingId)) return (
    <Container>
      <Text>Error: invalid painting ID!</Text>
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