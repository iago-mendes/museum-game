import { DialogueNode, PaintingDialogues } from '.'

const uniqueDialogue: DialogueNode = {
    speaker: "Test1",
    text: "Test1",
    next: {
        speaker: "Test2",
        text: "Test2",
        importantInfo: [
            'Test1',
            'Test2'
        ],
        newVisitedPainting: 'stillLife'
    }
}

export const stillLifeDialogues: PaintingDialogues = {
    visited: {
        speaker: "Test3",
        text: "Test3",
        next: {
            speaker: "Test4",
            text: "Test4",
            addImportantInfo: 'test3, test4'
        }
    },
    player1: uniqueDialogue,
    player2: uniqueDialogue
}