import { DialogueNode, PaintingDialogues } from '.'

const uniqueDialogue: DialogueNode = {
	speaker: 'Narrator',
    text: "Before you are vast mountain ranges and greeneries that stretched all the way to the horizon. A scream rippled through the peaceful sceneries.",
    next: {
        speaker: '???',
        text: "Please spare me I don’t mean any harm!",
        next: {
            speaker: "St. Michael",
            text: "Evil creatures like you should be dispelled. By the power of my holy blade I swear I will rid the world of your evils.",
            next: {
                speaker: "???",
                text: "You, my guy, are bonkers!!! Can’t you take a chill pill please for the love of god??",
                next: {
                    speaker: "St. Michael",
                    text: "How dare you speak lightly of His name?!",
                    next: {
                        speaker: "Narrator",
                        text: "You run over to where the commotion is happening.  Something tells you that what you’re looking for is close by.",
                        next: {
                            speaker: "Narrator",
                            text: "Running circles around each other are an iron-armored gentlemen, donning on a shiny iron sword, and… wow.",
                            next: {
                                speaker: "Bob Doe, in the flesh",
                                text: "The last time I ran a 5K, sponsored by Bank of America by the way, was decades ago. I’m tired, please just stop going after me will you. I'll even Venmo you if you would just stop!",
                                next: {
                                    speaker: "St. Michael",
                                    text: "Say no evil, do no evil, DEVIL!",
                                    next: {
                                        speaker: "Bob",
                                        text: "FOR THE MILLIONTH TIME, I AM NOT THE DEVIL! I'm just <<Bob>>",
                                        next: {
                                            speaker: "Narrator",
                                            text: "You’ve found Bob! And after all of the trouble he has gotten himself into, he’s still got a sharp tongue. ",
                                            next: {
                                                speaker: "Narrator",
                                                text: "Finally, St. Michael chased Bob into a corner. Bob is breathing heavily. His skin is even more red from being out in the sun, and his cheek has sagged down to his neck. Bro will need an intense facial, if he could come survive this interaction with St. Michael.",
                                                next: {
                                                    speaker: "Player",
                                                    text: "St. Michael! Please halt! There seems to be a misunderstanding.",
                                                    next: {
                                                        speaker: "Narrator",
                                                        text: "St. Michael lowers his sword.",
                                                        next: {
                                                            speaker: "Player",
                                                            text: "While he is a rude, and crude and a handful, that little gremlin is actually our acquaintance Bob. We’ve ventured through time and space in order to retrieve him. We’ve even met Cleopatra, and your friend, St. Sebastian! We will take care of him. Please do not dirty your sword as this soul can be… salvaged! Yes, salvage is the word!",
                                                            next: {
                                                                speaker: "Bob",
                                                                text: "I'm still here. And *turns to St. Michael* hellllooooo, you still have your foot over my neck! My acupuncturist will rain down on you!",
                                                                next: {
                                                                    speaker: "St. Michael",
                                                                    text: "And how can I trust you?",
                                                                    next: {
                                                                        speaker: "Player",
                                                                        text: "*shushes Bob* We… uh killed the snake. With our foot *shows St. Michael the soles of shoes*",
                                                                        next: {
                                                                            speaker: "St. Michael",
                                                                            text: "Huzzah! I don’t believe it! Finally the snake is gone! You have my trust. Have your gremlin back.",
                                                                            next: {
                                                                                speaker: "Player",
                                                                                text: "Words can not convey how much we appreciate this. You are indeed merciful and wise!",
                                                                                next: {
                                                                                    speaker: "St. Michael",
                                                                                    text: "Now off you go.",
                                                                                    next: {
                                                                                        speaker: "Player",
                                                                                        text:"*grabs onto Bob despite his writhing in pain* Right away!",
                                                                                        next: {
                                                                                            speaker: "Narrator",
                                                                                            text: "Congratulations! You're back at the present! And you've found Bob Doe, relatively safe and secured!"
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
                            }
                        }
                    }

                }
            }
        }
    }
}
export const michael: PaintingDialogues = {
	player1: uniqueDialogue,
	player2: uniqueDialogue
}
