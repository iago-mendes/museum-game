import { DialogueNode, PaintingDialogues } from '.'

const studioTourDialogue: DialogueNode = {
    speaker: "Narrator",
    text: "Strolling through her studio, you and Marie-Élisabeth spend several hours discussing the art of the four Lemoine sisters and the revolutionary reforms that enabled Marie-Victoire (Marie-Élisabeth’s older sister)  to officially exhibit her paintings at the prestigious Salon de Paris. You are fascinated by their incorporation of Neoclassical elements in their work, and, though <<not a new style for the time>>, you also find their <<Still Lifes>> to be quite <<tasteful>> and refreshing like perfectly ripened <<fruit>> on a hot summer’s day.",
    next: {
        speaker: 'Player',
        text: "Well Madame Lemoine, it’s been an absolute pleasure! I’m utterly <<gutted>> that I can’t stay for refreshments.",
        next: {
            speaker: "Marie-Élisabeth",
            text: "You may call me by my first names now. Though we’ve only known one another for a few hours, I consider us to be the best of <<chum>>s!",
            next: {
                speaker: "Narrator",
                text: "*Marie-Élisabeth gives you a hearty slap on the back*",
                next: {
                    speaker: "Marie-Élisabeth",
                    text: "And yes, it’s a damn shame you can’t stay, but I haven’t anything to offer you anyway. That damned glutton Doe positively devoured all my <<Hors d’Oeuvres>>, including all my <<fresh fruit>>! …<<he even said he was still hungry!>>",
                    next: {
                        speaker: "Player [shaking head sadly]",
                        text: "That dastardly dog!",
                        next: {
                            speaker: "Narrator [Getting annoyed at how long this is taking to narrate]",
                            text: "*You and Marie-Élisabeth exchange reluctant goodbyes before you resume the search for history’s greatest troublemaker*",
                            importantInfo: [
                                "The Lemoines painted Still Lives",
                                "Bob ate quite a bit, and was still hungry (what an @$$#0!3)",
                                "Marie-Élisabeth was especially pissed at Bob for eating her fresh <<fruit>>."
                            ],
                            newVisitedPainting: 'lady'
                        }
                    }
                }
            }
        }
    }
}

const lizzyDialogueOption: DialogueNode = {
    speaker: 'Lady',
    text: "Why, yes! ‘Tis I, the illustrious Madame Marie-Élisabeth Lemoine…how did you learn of me?",
    next: {
        speaker: 'Player',
        text: "\"Well, I...\" *definitely didn’t just read the placard next to the painting…right?* \"...am quite the French Revolution enthusiast!\"",
        next: {
            speaker: "Marie-Élisabeth Lemoine",
            text: "Oh. How blasé. We get so many of you Guillotine ogling tourists these days…at least it’s that sordid spectacle you’ve come to stare at and not me.",
            next: {
                speaker: "Player",
                text: "Oh dear...you aren't speaking of a certain Bo...",
                next: {
                    speaker: 'Marie-Élisabeth Lemoine [interrupting]',
                    text: "You’re acquainted with this ruffian?!",
                    next: {
                        speaker: "Narrator",
                        text: "*Sweat droplets form on your forehead*",
                        next: {
                            speaker: 'Player',
                            text: "Uhh…Uhh…Uhh…yeah? Kind of? He’s only my colleague I swear! I’m not friends with him or anything!",
                            next: {
                                speaker: "Marie-Élisabeth Lemoine",
                                text: "Well, you’re lucky. He barely escaped with his head attached. We French have a particular way of dealing with those such as he.",
                                next: {
                                    speaker: "Player [getting even more nervous]",
                                    text: "Quite understandable! *you desperately look for a way to change the subject* Woah! Did you paint that Portrait of a Girl in Neoclassical Dress at a Column Wearing a Laurel Wreath? *you point to a painting of a girl in neoclassical dress at a column wearing a laurel wreath*",
                                    next: {
                                        speaker: "Marie-Élisabeth Lemoine",
                                        text: "Why yes, I did.",
                                        next: {
                                            speaker: "Player",
                                            text: "I’m honored to gaze upon the <<fruits>> of your labors!",
                                            next: studioTourDialogue
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

const dumpsterDialogueOption: DialogueNode = {
    speaker: "Narrator",
    text: "The Lady knocks you out with one clean punch. You wake up in a French dumpster filled with rotting <<fruit>>. Gross!",
    next: {
        speaker: "Narrator",
        text: "Even worse, <<a bite was taken out of every piece>>…double gross!",
        importantInfo: [
            'Every piece of <<fruit>> in the dumpster had a bite taken out of it.'
        ]
    }
}

const victoireOptionDialogue: DialogueNode = {
    speaker: "Lady",
    text: "I’m afraid not…that would be my sister.",
    next: {
        speaker: 'Player',
        text: "Then you must be Marie-Élisabeth!",
        next: {
            speaker: 'Lady',
            text: "A fine demonstration of the process of elimination. Though, I am pleasantly surprised you know of us at all; my last…visitor…was extremely uncouth, scandalously so…and my god, he smelled so <<ripe>>. He barely escaped the Guillotine, and dare I say: what a shame.",
            next: {
                speaker: 'Player',
                text: "Firstly, I must apologize for the behavior of my, ehrm…colleague. He will be severely reprimanded when we locate him, I guarantee it! However, Bob Doe aside,  I am deeply passionate about the evolution of European art , with a particular interest in the fine art produced during this Revolution you’re having. If I may humbly say: I would be deeply gratified to receive a tour of your studio.",
                next: {
                    speaker: "Marie-Élisabeth Lemoine",
                    text: "I would be happy to oblige…but only on one condition: You must ensure that this “Bob Doe” miscreant is made to atone for his crimes against decency and civic virtue! If you fail in this task, I’ll know. Don’t ask how.",
                    next: {
                        speaker: "Player",
                        text: "I swear it! Bob Doe will pay!",
                        next: {
                            speaker: "Narrator",
                            text: "It remains to be seen whether or not Player 2 will live up to their word.",
                            next: {
                                speaker: "Player (in head)",
                                text: "*Wow. This Bob Doe guy really sucks...why are we saving his ass again?",
                                next: studioTourDialogue
                            }
                        }
                    }
                }
            }
        }
    }
}

export const ladyDialogues: PaintingDialogues = {
    locked: {
        speaker: "Narrator",
        text: "The lady sits, refined and dignified, before you. Her eyes razor sharp, as if boring into your soul, yet clearly she is utterly uninterested in anything you might have to say."
    },
    visited: {
        speaker: "Player",
        text: "I've had enough of France..."

    },
    player1: {
        speaker: 'Player',
    text: "Good day, madame. May I have a bit of your time?",
    next: {
        speaker: 'Lady',
        text: '*stares dissmissively*',
        options: [
            {
				key: 'A',
				prompt: "I'll get out of your hair...",
				dialogue: {
                    speaker: "Player",
                    text: '*ugh…the French…*'

                }
			},
            {
                key: 'B',
                prompt: "*wave hand in front of her face* Um, hello? I’m talking to you ya know…",
                dialogue: {
                    speaker: "lady",
                    text: "*narrows eyes in annoyance* “I see you time-travelers are all alike: rude, obnoxious, and utterly un-revolutionary…CITIZENS, COME QUICKLY! I HAVE CAPTURED AN ARISTOCRATIC CONSPIRATOR!*looks at you with an amused expression, as if to say “what are you going to do about that, eh?”*",
                    next: {
                        speaker: 'Player',
                        text: "Seriously Lady?!     *I’d better get out of here…* "
                    }
                }
            },
            {
                key: 'C',
                prompt: "Vive la Révolution!",
                dialogue: {
                    speaker: 'Lady',
                    text: "*raises eyebrows in amusement* Quite the little Jacobin you are.",
                    next: {
                        speaker: 'Player (in head)',
                        text: "*Crap...if only I'd studied <<French history>>...*",
                        next: {
                            speaker: 'Player',
                            text: "Uh…what's a Jacobin?",
                            next: {
                                speaker: 'Lady',
                                text: "...",
                                importantInfo: [
                                    "This French lady made a reference you might have understood if you knew your French history."
                                ],
                                newVisitedPainting: 'lady'
                            }
                        }
                    }
                }
            }
        ]
    }
},
    player2: {
        speaker: "Player",
        text: "...my god!",
        next: {
            speaker: 'Lady',
            text: " *rolls eyes as if to say “not this $#!% again…”*",
            next: {
                speaker: 'Player',
                text: "Forgive me Madame, I was briefly overcome with excitement…You are none other than [OPTION], no?",
                options: [
                    {
                        key: 'A',
                        prompt: "Marie-Victoire Lemoine",
                        dialogue: victoireOptionDialogue
                    },
                    {
                        key: 'B',
                        prompt: "Marie-Élisabeth Lemoine",
                        dialogue: lizzyDialogueOption
                    },
                    {
                        key: 'C',
                        prompt: "Marie Antionette",
                        dialogue: {
                            speaker: "Lady [So irritated by your comment she can’t ignore you]",
                            text: "...Excuse me?! Marie Antionette? Madame Veto?! That mad woman, that Austrian interloper who dared to exploit the people of France?! I am almost as offended as I was by the unseemly advances of another recent temporal intruder…I hope you have something witty to say, because if not…",
                            next: {
                                speaker: "Narrator",
                                text: "*The Lady starts rolling up her sleeves, you know you’re in for it if you don’t think fast.*",
                                options: [
                                    {
                                        key: 'X',
                                        prompt: "Say: \"I was only joking!\"",
                                        dialogue: {
                                            speaker: "Player",
                                            text: "I was only joking! Vive les sans-culottes! Liberté, égalité, fraternité!",
                                            next: {
                                                speaker: "Narrator",
                                                text: "*You desperately try to think of more French revolutionary slogans*",
                                                next: {
                                                    speaker: 'Lady',
                                                    text: "You're going to have to do better than that...",
                                                    options: [
                                                        {
                                                            key: 'X1',
                                                            prompt: "I love your hat!",
                                                            dialogue: dumpsterDialogueOption
                                                        },
                                                        {
                                                            key: 'X2',
                                                            prompt: "Wait, I’m sorry! I know who you really are!",
                                                            dialogue: {
                                                                speaker: 'Lady',
                                                                text: "I'm listening...",
                                                                options: [
                                                                    {
                                                                        key: 'X3',
                                                                        prompt: "You’re Marie-Victoire Lemoine, I tremendously admire your work. Exhibiting at the Salon de Paris, what an achievement!",
                                                                        dialogue: {
                                                                            speaker: 'Lady',
                                                                            text: "That’s my sister, she gets all the attention! I’m Marie-Élisabeth!",
                                                                            next: dumpsterDialogueOption
                                                                        }
                                                                    },
                                                                    {
                                                                        key: 'X4',
                                                                        prompt: "You’re Marie-Élisabeth Lemoine, I was so excited to meet a painter so gifted as yourself I got nervous and the wrong name popped out!",
                                                                        dialogue: {
                                                                            speaker: 'Narrator',
                                                                            text: "*She lowers her fists, and relief washes over you…you know you could never take her in a 1v1*",
                                                                            next: lizzyDialogueOption
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }        
                                        }

                                    },
                                    {
                                        key: 'Y',
                                        prompt: "Square up to the Lady. She's goin' down.",
                                        dialogue: dumpsterDialogueOption
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }
}