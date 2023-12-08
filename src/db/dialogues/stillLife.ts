import { DialogueNode, PaintingDialogues } from '.'

const antelope: DialogueNode = {
    speaker: "Player",
    text: "I'm outta here",
    next: {
        speaker: "...",
        text: "*Nothing happens*",
        next: {
            speaker: "Player",
            text: "Hello? Ya know it is kind of <<your>> job to, like, ya know…",
            next: {
                speaker: "Narrator",
                text: "*interrupting* This is <<not>> acceptable behavior for someone who has been trained in playing!",
                next: {
                    speaker: "Player",
                    text: "Yeah! Keep on hitting the “next” button, why don’t ya? <<See>> what happens…",
                    next: {
                        speaker: "Narrator",
                        text: "I know you’ve ignored my dialogue before…what makes you think you can do it again and get away with it!",
                        next: {
                            speaker: "...",
                            text: "*You are getting nervous*",
                            next: {
                                speaker: "Narrator",
                                text: "*You are becoming not only nervous given that the Narrator is threatening you, but also annoyed that the dialogue for this painting is absurdist, but not even in a funny or good way it’s just…",
                                next: {
                                    speaker: "Player [Interrupting]",
                                    text: "Ok now <<that>> actually crosses a line…we were joking before, legit. But I’m serious when I say that what you were just thinking about my work was not cool. You’re, just, so…argh, just so off <<base>>! *takes massive breath of air, then exhales slowly* I spent a long time writing that, and it was <<intentional>> absurd<<ism>>! It’s philosophical! Intentional! Each word was carefully considered! As the person who…",
                                    next: {
                                        speaker: "Narrator Gently, yet forcefully, interrupting, but clearly slightly annoyed. It’s obvious there’s baggage from outside of work going on between the Player and the Narrator that, despite their best efforts, is affecting their interactions as colleagues]",
                                        text: "This one’s actually mine I think.",
                                        next: {
                                            speaker: "Player [Picking up on the Narrator’s annoyance even though nobody else does, it’s imperceptible really. Or is the Player just reading into it too much?]",
                                            text: "Shoot…yeah…sorry. *turning head to speak to the audience* Sorry everyone, *shrugging* it happens.",
                                            next: {
                                                speaker: "Narrator [exploding with rage]",
                                                text: "that’s my line again, w<<t>>f dude. You. cannot say.  that to me <<an>>d…aaaaaaa..aaaa.",
                                                next: {
                                                    speaker: "Player",
                                                    text: "...",
                                                    next: {
                                                        speaker: "Narrator",
                                                        text: "Sorry, my voice went AI generated there for a second.",
                                                        next: {
                                                            speaker: "Player",
                                                            text: "Can we start from page 3?",
                                                            importantInfo: [
                                                                "The Narrator wanted to start from page <<3>>",
                                                                "There is meaning in nonsense, especially when shouted."
                                                            ],
                                                            newUnlockedPainting: 'sebastian'

                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                }

            }
        }
    }
}

const uniqueDialogue: DialogueNode = {
    speaker: "Narrator",
    text: "<<You need to leave and come back.>>",
    newVisitedPainting: 'stillLife',
    importantInfo: [
        "You need to leave and come back"
    ]
}

const sharedDialogue: DialogueNode =  {
    speaker: "Narrator",
    text: "How vile! You find yourself surrounded by a senseless amount of unappetizing food, such as ripe peaches and grapes…Revolting. But also there’s a Lobster exoskeleton and dead fish and skulls! How appetizing! You are rather peckish indeed, to say the least!",
    next: {
        speaker: "Narrator",
        text: "You’re about to begin a meandering ramble, your plan being to sample as many irresistible horrors as possible, including a desiccated antelope carcass that’s calling your name, however you decide to pause next to a bowl of spine-chillingly crisp apples to evacuate your stomach in preparation for ravenous gorging…",
        next: {
            speaker: "Player (in head)",
            text: "...wait, whatever it is this is definitely not an antelope…",
            next: {
                speaker: "Apple (outloud)",
                text: "... I know...",
                next: {
                    speaker: "Player",
                    text: "Shut up, I wasn’t talking to you!",
                    next: {
                        speaker: "Antelope",
                        text: "I actually am an antelope though…",
                        next: {
                            speaker: "Player",
                            text: "Shut up, this antelope is speaking to me!",
                            next: {
                                speaker: "Antelope",
                                text: "I told you, I’m an antelope!",
                                next: {
                                    speaker: "Player",
                                    text: "You are most certainly not!",
                                    next: {
                                        speaker: "Apple (in head)",
                                        text: "Little does he know…I’m actually an Antelope.",
                                        next: {
                                            speaker: "Player(out loud)",
                                            text: "The only way to know is to taste it.",
                                            options: [
                                                {
                                                    key: 'A',
                                                    prompt: "Take a bite of the unidentified carcass",
                                                    dialogue: {
                                                        speaker: 'Player',
                                                        text: "That tastes bad.",
                                                        removeVisitedPainting: 'stillLife'
                                                    }
                                                },
                                                {
                                                    key: 'B',
                                                    prompt: "Take a bite of the Antelope",
                                                    dialogue: antelope
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        }

                    }

                }
            }
        }
    }
}

export const stillLifeDialogues: PaintingDialogues = {
    locked: uniqueDialogue,
    player1: sharedDialogue,
    player2: sharedDialogue
}
