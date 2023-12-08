import { DialogueNode, PaintingDialogues } from '.'

const uniqueDialogue: DialogueNode = {
	speaker: 'Narrator',
	text: "Much to the horror of clueless 19th Century Europeans, a dark hole formed amid the tranquil, cloudy sky, and you fell right through it, straight into the gondola of an unamused Venitian. ",
	next: {
		speaker: 'Man',
		text: "You have got to be kidding me. Second time in a day. I can't catch a break around here.",
		next: {
			speaker: 'Player',
			text: "Woah, I am so sorry!",
			next: {
				speaker: 'Man',
				text: "Well, at least this one's polite. What's your business with me here?",
				next: {
					speaker: "Player",
					text: "Ah yes! Can you tell me about the person who bothered you before me?",
					next: {
						speaker: "Narrator",
						text: "The Venitian man started rowing his gondola, causing subtle ripples through the clear canal towards the majestic horizons.",
						next: {
							speaker: "Man",
							text: "Strange guy. He didn't know how to be quiet. Kept persuading me that I should ditch my precious gondola and invest in “an actual boat”, a cruise he said.",
							next: {
								speaker: "Narrator",
								text: "You two passed by some of the most fascinating architecture you've ever seen, so much so that you're lost for words.",
								next: {
									speaker: "Man",
									text: "See, a man like him wouldn't know how to appreciate the beauty around him. The only thing he had eyes for was this French woman. <<Hot>>, he called her.",
									next: {
										speaker: "Player",
										text: "I wouldn't expect anything more from him. So where did he go?",
										next: {
											speaker: "Narrator",
											text: "Before you were aware of it, the gondola had docked next to the domed church of San Giorgio Maggiore.",
											next: {
												speaker: "Man",
												text: "Off you go. <<Your friend hurried off to follow that French woman>>, saying something about hippie art chicks being his type.",
												next: {
													speaker: "Player",
													text: "Ugh, of course. You were so much help. Thank you very much.",
													next: {
														speaker: "Man",
														text: "Let me tell you something, French women are not easy to deal with… you must be able to get on the same level as her, you know, challenge her intellectually, maybe in <<French>>.",
														next: {
															speaker: "Narrator",
															text: "Before you left, you made sure to tip the man handsomely, for the help and for dealing with Bob.",
															importantInfo: [
																'Bob went looking for a French woman.',
																'Someone who understands French should look for her.'
															],
															newUnlockedPainting: 'lady'
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

export const veniceDialogues: PaintingDialogues = {
	player1: uniqueDialogue,
	player2: uniqueDialogue
}
