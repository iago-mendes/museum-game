import { useEffect, useState } from 'react'
import { Container, Text, View } from '../components/Themed'
import { paintingDialogueOptions } from '../db/paintingDialogueOptions'
import { DialogueNode, PaintingId } from '../db/types'

export default function DialogueScreen() {
  // TODO: replace code below with screen parameter.
  const paintingId = 'harmonizing'

  const dialogueOptions = paintingDialogueOptions[paintingId]

  // TODO: replace code below with context for player info.
  const player = 'player2'
  const unlockedPaintings: Set<PaintingId> = new Set(['harmonizing'])

  let dialogue: DialogueNode | null = null
  if (!dialogueOptions[player].locked || unlockedPaintings.has(paintingId)) {
    dialogue = dialogueOptions[player].unlocked
  } else {
    dialogue = dialogueOptions[player].locked
  }

  const [shownDialogue, setShownDialogue] = useState<DialogueNode[]>([])
  let intervalId: NodeJS.Timeout | null = null

  useEffect(() => {
    intervalId = setInterval(addNextDialogue, 2000)

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [])

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