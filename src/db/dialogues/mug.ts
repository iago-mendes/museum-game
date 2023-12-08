import { PaintingDialogues } from '.'

export const uniqueDialogue: PaintingDialogues = {
	locked: {
		speaker: 'Narrator',
		text: "You see a strange bear-shaped drinking vessel. Not really sure how you’re supposed to drink out of it. ",
	},
	player1: {
		speaker: 'Narrator',
		text: "The bear-shaped mug, eyes wide apart, stared straight into your soul. As a potter, you embraced the uncanniness, and observed its texture and odd shape. Sensing your appreciation, the mug spoke.",
        next: {
            speaker: 'Mug',
            text: "Looking at something you fancy?",
            next: {
                speaker: 'Player 1',
                text: "Yikes!  I mean… yes! Hi! Hello!",
                next: {
                    speaker: 'Mug',
                    text: "No need to fawn, I know I do look quite dazzling myself. Finally, someone with real taste!",
                    next: {
                        speaker: 'Player 1',
                        text: "Well you look like a meme – in a good way! Why the chain around the neck? It looks so tight.",
                        next: {
                            speaker: 'Mug',
                            text: "Oh don’t mind it. I don’t breathe anyways. But in the grand sports of bear-baiting, real bears are chained up and made to fight other animals – dogs most of the time.",
                            next: {
                                speaker: 'Player 1',
                                text: "Fascinating… and you are like, what, a caricature of that?",
                                next: {
                                    speaker: 'Mug',
                                    text: "You can say so. I represent rowdiness, and drunkenness and overconsumption!",
                                    next: {
                                        speaker: 'Player 1',
                                        text: "Oh oh on that same vein, I am looking for someone. Quite rude, and might have had a little bit of a beer-breath.",
                                        next: {
                                            speaker: 'Mug',
                                            text: "Why yes I’ve indeed encountered this person. I don’t think he quite understood how to handle me, so he just left.",
                                            next: {
                                                speaker: 'Player 1',
                                                text: "Where to?",
                                                next: {
                                                    speaker: 'Mug',
                                                    text: "He mentioned <<needing to go the bathroom>>. The nearest one I could think of at that moment was in the temple guarded by those ferocious, nasty <<BEASTS>>. Now that I think about it, I might have left the latter details out.",
                                                    next: {
                                                        speaker: 'Player 1',
                                                        text: "So he’s in like *sighs* actual trouble?",
                                                        next: {
                                                            speaker: 'Mug',
                                                            text: "Depending on whether he kept up that attitude *snorts*.",
                                                            next: {
                                                                speaker: 'Player 1',
                                                                text: "Gee- well thank you!",
                                                                next: {
                                                                    speaker: 'Mug',
                                                                    text: "You are very much welcome, dear potter!",
                                                                    importantInfo: [
                                                                        'Bob went to a temple guarded by two <<BEASTS>> for a bathroom break'
                                                                    ],
                                                                    newUnlockedPainting: 'dogLion',


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
    },
	player2: {
		speaker: 'Player 2',
		text: "*picks up mug* Hmmm, the structural integrity of this mug is questionable.",
        next: {
            speaker: 'Mug',
            text: "*growls* Leave before I bite your neck off.",
            next: {
                speaker: 'Player 2',
                text: "... Say less",
                next: {
                    speaker: 'Narrator',
                    text: "Player 2 gently laid the mug down, and swiftly made their exit. Hopefully they've learned their lesson."
                }
            }
        }
		
	}
}