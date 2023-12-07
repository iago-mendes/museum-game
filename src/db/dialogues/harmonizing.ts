import { DialogueNode, PaintingDialogues } from '.'

const uniqueDialogue: DialogueNode = {
	speaker: 'Narrator',
	text: 'You walked along the streets of West Chester, Philadelphia, a quaint small town. Around the corners are four men, singing together as a quartet. After harmonizing with each other for a while, they stopped and started talking among themselves.',
	next: {
		speaker: 'Man 1',
		text: 'Man we sound soo good!',
		next: {
			speaker: 'Man 2',
			text: 'We would have sounded better if Jake could just a little more… consistent with his pitch.',
			next: {
				speaker: "Man 3",
				text: "You're never happy with me! Don't think just because you're Horace Pippin's stepson that you're the hot shot around here!",
				next: {
					speaker: "Man 4",
					text: "Let's not squabble. I already <<had to deal with an idiot>> today, don't want three other on my plates.",
					next: {
						speaker: "Men",
						text: "*continues singing*",
						next: {
							speaker: "Players",
							text: "Sorry to interrupt you guys. Beautiful melody by the way. Did you say you “had to deal with an idiot”?",
							next: {
								speaker: "Men",
								text: "*Look at players curiously*",
								next: {
									speaker: "Man 1",
									text: "That fella? Whoever complimented him on his singing before should go to jail.",
									next: {
										speaker: "Man 3",
										text: "Such arrogance.",
										next: {
											speaker: "Players",
											text: "Any idea where stomped off to?",
											next: {
												speaker: "Man 2",
												text: "That jackass raved on and on about how there's <<no good benches>> around our West Chester.",
												next: {
													speaker: "Man 1",
													text: "Who's that desperate for a bench!? He was saying stuff like, “Oh this bench is not tall enough,” or nonsenses like “If I was in charge of building benches in this town, the world would be so much better”.",
													next: {
														speaker: "Man 2",
														text: "Anywho, whoever comes after that fool should <<know a whole lot about construction>> to shut him up.",
														next: {
															speaker: "Men",
															text: "No more of this. Back to singing guys! We have to perform at town hall this weekend! *shoos players away*",
															newUnlockedPainting: 'chair',
															newVisitedPainting: 'harmonizing',
															importantInfo: [
																'Bob was looking for good benches.',
																'Someone who knows about construction should follow his path.'
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

export const harmonizingDialogues: PaintingDialogues = {
	visited: {
		speaker: 'Narrator',
		text: "You return to Philadelphia, see another version of yourself talking to the men, and promptly get the hell out of there before you create a time paradox or whatever."
	},
	player1: uniqueDialogue,
	player2: uniqueDialogue
}
