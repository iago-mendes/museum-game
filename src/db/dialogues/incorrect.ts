import { DialogueNode, PaintingDialogues } from '.'

const uniqueDialogue: DialogueNode = {
    speaker: 'Narrator',
    text: "Your device emits an ear-splitting noise. You're still standing in the Museum",
    next: {
        speaker: 'Karen',
        text: "Don't even try it! Going there would violate the laws of Space and Time, as you well know!"
    }

}

export const incorrectDialogues: PaintingDialogues = {
	player1: uniqueDialogue,
	player2: uniqueDialogue
}