import { PaintingDialogues, DialogueNode } from ".";

const playerOneDialogues: DialogueNode = {
  speaker: 'Narrator',
  text: 'A solitary man stands, hands behind his back, in a windswept field…seems he was attacked…tell your compatriot how you found him.',
  next: {
    speaker: 'The Wind  *Whistles Aggressively*',
    text: "Hh...",
    next: {
      speaker: "Player",
      text: "I think I know who you are.",
      next: {
        speaker: "A solitary man standing, hands behind his back, in a windswept field looking as if he was attacked",
        text: "I knew you’d recognize me?",
        next: {
          speaker: 'Player',
          text: "haha…reeeeal funny. *you look closer…he actually kind of looks like Bob! It can’t be…it would be crazy…*",
          next: {
            speaker: "Player *tentatively*",
            text: "B…Bob?",
            next: {
              speaker: "A solitary man standing, hands behind his back, in a windswept field looking as if he was attacked",
              text: " …of course I’m not Bob. Gotcha!",
              next: {
                speaker: "Player *very Embarrassed*",
                text: "…dang…I’d feel bad if…I WASN’T MESSING WITH YOU BACK!...No I was….",
              }
            }
          }
        }
      }
    }
  }
}

const playerTwoDialogues: DialogueNode = {
  speaker: 'Player',
  text: "Hello?",
  next: {
    speaker: "Sebastian",
    text: "Did you like my experimental Dutch Painting?",
    next: {
      speaker: "Player",
      text: "...",
      next: {
        speaker: "St. Sebastian",
        text: "You poor <<DEVIL>>.",
        importantInfo: [
          "You have a feeling <<DEVIL>> is an important piece of information."
        ]
      }
    }
  }
}

export const sebastian: PaintingDialogues = {
  locked: {
    speaker: "Narrator",
    text: "Remember, it’s ok for things not to make sense."
  },
  player1: playerOneDialogues,
  player2: playerTwoDialogues
}
