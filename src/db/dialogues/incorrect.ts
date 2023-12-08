import { DialogueNode, PaintingDialogues } from '.'

const uniqueDialogue: DialogueNode = {
    speaker: 'Narrator',
    text: "Your device emits an ear-splitting noise. You're still standing in the Museum",
    next: {
        speaker: 'Karen',
        text: "Don't even try it! Going there would violate the laws of Space and Time, as you well know!",
        newVisitedPainting: 'incorrect'
    }

}

export const incorrectDialogues: PaintingDialogues = {
    visited: {
        speaker: 'Narrator',
        text: "You feel that something is terribly wrong",
        next: {
            speaker: 'Scottish Karen',
            text: 'Aww that\s pure bampot! I told ye tae stop messin\' aboot wit yer daft attempts tae go where naebody has gone befae!...England!',
            removeVisitedPainting: 'incorrect'
        }
    },
	player1: uniqueDialogue,
	player2: uniqueDialogue
}