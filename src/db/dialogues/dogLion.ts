import { DialogueNode, PaintingDialogues } from '.'

const standOption: DialogueNode = {
    speaker: 'Narrator',
    text: "You accept the way things are and stood your ground.",
    next: {
        speaker: 'Korean Dog',
        text: "...",
        next: {
            speaker: 'Chinese Lion',
            text: "...",
            next: {
                speaker: 'Player',
                text: "...",
                next: {
                    speaker: 'Korean Dog',
                    text: "...",
                    next: {
                        speaker: 'Chinese Lion',
                        text: "...",
                        next: {
                            speaker: 'Player',
                            text: "...",
                            next: {
                                speaker: 'Korean Dog',
                                text: "Okay Shishi, I think this one's acceptable.",
                                next: {
                                    speaker: 'Chinese Lion (Shishi)',
                                    text: "I can see that, Komainu.",
                                    next: {
                                        speaker: 'Player',
                                        text: "...May I ask where my... acquaintance is?",
                                        next: {
                                            speaker: 'Chinese Lion (Shishi)',
                                            text: "He couldn’t stand the silence. Patience was not his virtue.",
                                            next: {
                                                speaker: 'Korean Dog (Komainu)',
                                                text: "He dared to trespass. I made sure he never tried again.",
                                                next: {
                                                    speaker: 'Player',
                                                    text: "*gulp*... How? You know I almost don’t want to know.",
                                                    next: {
                                                        speaker: 'Chinese Lion (Shishi)',
                                                        text: "It was a light nibble. Some clothes were torn. Not that he would want to wear it anyways. What a mess he was.",
                                                        next: {
                                                            speaker: 'Player',
                                                            text: "So where did he go?",
                                                            next: {
                                                                speaker: 'Korean Dog (Komainu)',
                                                                text: "Feeble minds are quick to succumb.",
                                                                next: {
                                                                    speaker: 'Chinese Lion (Shishi)',
                                                                    text: "The snake that’s been loitering around this area invited your acquaintances to witness something “good”",
                                                                    next: {
                                                                        speaker: 'Player',
                                                                        text: "That doesn’t sound good at all.",
                                                                        next: {
                                                                            speaker: 'Korean Dog (Komainu)',
                                                                            text: "He’s venomous though, so don’t come near him unless <<you know something about first aids>>.",
                                                                            next: {
                                                                                speaker: 'Chinese Lion (Shishi)',
                                                                                text: "...",
                                                                                next: {
                                                                                    speaker: 'Korean Dog (Komainu)',
                                                                                    text: "...",
                                                                                    next: {
                                                                                        speaker:'Player',
                                                                                        text: "That's my queue to leave. Thank you both!",
                                                                                        next: {
                                                                                            speaker: 'Narrator',
                                                                                            text: "You leave, daring not to turn your back against them.",
                                                                                            newUnlockedPainting: 'cleopatra',
                                                                                            importantInfo: [
                                                                                                'Bob has followed a snake',
                                                                                                "It'd be best if someone who knows first aid go after Bob and the snake."
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

const getOutOption: DialogueNode = {
    speaker: 'Narrator',
    text: 'You sigh in defeat, and whipped out the Museum Device to punch in the codes to go back.',
    next: {
        speaker: 'Device',
        text: "*beep boop beep boop* Oh good you found him?",
        next: {
            speaker: 'Player',
            text: "*screeches* GAH Oh my good god hi Karen.",
            next: {
                speaker: 'Narrator',
                text: "Karen’s voice blasts out from the device. You can hear her typing really loudly in the background.",
                next: {
                    speaker: 'Device',
                    text: "Yeah your device said you’d be coming back to the 20XX. You found him?",
                    next: {
                        speaker: 'Player',
                        text: "*looks at Korean Dog and Chinese Lion* Not really…",
                        next: {
                            speaker: 'Device:',
                            text: "Oh so you just wanted a break? While being clocked in? *more typing in the background*",
                            next: {
                                speaker: 'Player',
                                text: "Ah no no no no I was just tinkering around with my device. I’m close to finding Bob.",
                                next: {
                                    speaker: 'Device',
                                    text: "Okay, that’s good to hear, *typing stops*, because if you don’t find him maybe you two will have to shoulder this itemized bill I just typed up for all the damages your little friend has caused our establishment so far. Six figures, you got this right?",
                                    next: {
                                        speaker: 'Player',
                                        text: "Oh yes yes yes yes we SOOO got this. Await good news! Okay bye!",
                                        next: {
                                            speaker: 'Device',
                                            text: "That’s what I though-",
                                            next: {
                                                speaker: 'Narrator',
                                                text: "You shut off the device, and reluctantly turned around to face Korean Dog and Chinese Lion, once again.",
                                                next: {
                                                    speaker: 'Narrator',
                                                    text: "And so the hero of our story decided to stay.",
                                                    options: [
                                                        {
                                                            key: 'C',
                                                            prompt: 'Continues standing in silence (Sort of your last option)',
                                                            dialogue: standOption
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
        } 

    }

const rubOption: DialogueNode = {
    speaker: 'Narrator',
    text: "A good belly rub always help! Maybe if you call Korean Dog a good boy it’ll even wag its tail? And maybe even present you with Bob Doe, hopefully in one piece?",
    next: {
        speaker: 'Narrator',
        text: "You gleefully skip towards Korean Dog. Before your other leg ever touches the ground, both entities bared its fangs and growled at you",
        next: {
            speaker: 'Player',
            text: "Maybe that wasn’t a good idea.",
            options: [
                {
                    key: 'B',
                    prompt: 'Get out of here',
                    dialogue: getOutOption
                },
                {
                    key: 'C',
                    prompt: 'Continues standing in silence',
                    dialogue: standOption
                }
            ]
        }
    }
}

const dogLionOptions: DialogueNode = {
    speaker: 'Narrator',
    text: "Korean Dog and Chinese Lion turned to look at each other. You are unsure of what to do next.",
    options: [
    {
        key: 'A',
        prompt: 'Give Korean Dog a belly rub',
        dialogue: rubOption,
    },
    {
        key: 'B',
        prompt: 'Get out of here',
        dialogue: getOutOption
    },
    {
        key: 'C',
        prompt: "Continues standing in silence.",
        dialogue: standOption
    }
    ]
}

const uniqueDialogue: DialogueNode = {
	speaker: 'Narrator',
	text: "The infamous “ferocious beasts” solemnly stood beside each other. One of them had their mouth open, the other’s closed. Their watchful eyes follow your every move. With the utmost respect and care, you approach them, with your head lowered, voice hushed.",
    next: {
        speaker: 'Korean Dog',
        text: "...",
        next: {
            speaker: 'Chinese Lion',
            text: "...",
            next: {
                speaker:  'Player',
                text: "Greetings! Um yeah so I promise I’m here with good intentions and will not cause any disturbances in your sacred space.",
                next: {
                    speaker: 'Korean Dog',
                    text: "...",
                    next: {
                        speaker: 'Chinese Lion',
                        text: "...",
                        next: {
                            speaker: 'Player',
                            text: "You may have encountered another individual passing by. He… was probably a bit out of line and I’d like to apologize for all the inconveniences.",
                            next: dogLionOptions,
                            }
                            
                        }
                    }
                }

            }
        }
} 

export const dogLionDialogues: PaintingDialogues = {
	player1: uniqueDialogue,
	player2: uniqueDialogue
}




