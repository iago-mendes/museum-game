import { PaintingDialogues } from '.'

export const cleopatraDialogues: PaintingDialogues = {
    locked: {
        speaker: 'Narrator',
        text: 'The room is pitch black. You waddled around and stubbed your toe against a table leg. You wince in pain, and left.',
    },
    player1: {
        speaker: 'Narrator',
        text: "The room is pitch black. In the background is a strange, but subtle hiss.",
        next: {
            speaker: 'Player 1',
            text: "Now where is that pesky snake?!",
            next: {
                speaker: "Narrator",
                text: "While walking around, you almost tripped over someone lying on the ground.",
                next: {
                    speaker: "Player 1",
                    text: "Hey man, I feel you. But your mom and dad need you man. What matters is in the present. Bob has no idea what he was talking about. He barely passed ECON 101.",
                    next: {
                        speaker: "Woman",
                        text: "*groans*",
                        next: {
                            speaker: "Player 1",
                            text: "Oh my god, my bad! Are you okay?!",
                            next: {
                                speaker: "Woman",
                                text: "Leave me be...",
                                next: {
                                    speaker: "Player 1",
                                    text: "What’s wrong?! Did you get bitten by a snake?",
                                    next: {
                                        speaker: 'Woman',
                                        text: "By choice! I’d rather go down by my own volition than to fall in the hands of my enemies.",
                                        next: {
                                            speaker: 'Player 1',
                                            text: "Wait! What?",
                                            next: {
                                                speaker: 'Woman',
                                                text: "My beloved Mark Antony, father to my three children, had just been defeated! Sooner or later they’ll come after me too.",
                                                next: {
                                                    speaker: 'Player 1',
                                                    text: "Are you in pain?",
                                                    next: {
                                                        speaker: 'Woman',
                                                        text: "I am Cleopatra, my empire is my life! *groans* This really hurts though. Um, actually I changed my mind. Yeah this really hurts.",
                                                        next: {
                                                            speaker: 'Player 1',
                                                            text: "Let me see what I can do!",
                                                            next: {
                                                                speaker: 'Narrator',
                                                                text: "Luckily for Cleopatra, Player 1 had just learned about venom antidotes in last week’s Biology class. How timely! They demonstrated their medical prowess on Cleopatra and she instantly felt relief.",
                                                                next: {
                                                                    speaker: 'Player 1',
                                                                    text: "How do you feel now?",
                                                                    next: {
                                                                        speaker: 'Cleopatra',
                                                                        text: "*sits down* Much better! I should have never let that snake convinced me into doing something so foolish.",
                                                                        next: {
                                                                            speaker: 'Player 1',
                                                                            text: "Did it come with someone?",
                                                                            next: {
                                                                                speaker: 'Cleopatra',
                                                                                text: "Yes, a pathetic little man. I guess he found me intimidating. Couldn’t even say a proper salutation.",
                                                                                next: {
                                                                                    speaker: 'Player 1',
                                                                                    text: "Oh Bob. How was he? Did he look like he was in one piece?",
                                                                                    next: {
                                                                                        speaker: 'Cleopatra',
                                                                                        text: "He’s worn out alright. Clothes’ all tattered. That snake also bit him while he was too busy ‘rizzing’ me up or whatever he said.",
                                                                                        next: {
                                                                                            speaker: 'Player 1',
                                                                                            text: "*facepalms* Gosh.",
                                                                                            next: {
                                                                                                speaker: 'Cleopatra',
                                                                                                text: "His skin started turning all <<RED>> from the rashes, and the bitemarks on his head swelled up into these really nasty bumps",
                                                                                                next: {
                                                                                                    speaker: 'Player 1',
                                                                                                    text: "Yikes. I gotta find him. Will you be okay though Cleopatra?",
                                                                                                    next: {
                                                                                                        speaker: 'Cleopatra',
                                                                                                        text: "*fanning face* Ooh it’s hot in here. I’m Cleopatra the Great, I’ll figure something else out.",
                                                                                                        next: {
                                                                                                            speaker: 'Player 1',
                                                                                                            text: "Remember to drink lots of water! *pauses* By chance you know where the snake is?",
                                                                                                            next: {
                                                                                                                speaker:'Cleopatra',
                                                                                                                text: "Oh he got squished when someone was rumbling around here. One less problem for me to worry about.",
                                                                                                                next: {
                                                                                                                    speaker: 'Narrator',
                                                                                                                    text: "It seems like Bob is in dangerously bad shape. Taking one last moment to check up on Cleopatra, you rushed off. It would really suck for your group project and paycheck if Bob gets in even more trouble.",
                                                                                                                    importantInfo: [
                                                                                                                        "Bob has turned <<RED> from rashes, and his wounds from messing with Korean Dog and Chinese Lion from earlier has swelled up.>",
                                                                                                                        "You need to find him, now!"
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
    },
    player2: {
        speaker: 'Narrator',
        text: "The room is pitch black. Knowing that there is potentially a snake lurking around here, you left immediately. You are smart.",
    }
}