import { DialogueNode, PaintingDialogues } from '.'

const uniqueDialogue: DialogueNode = {
	speaker: 'Narrator',
	text: 'You tumble onto an Armenian farm in 1919, and can immediately hear the sound of folk music being hummed by hardworking farmers in the background.',
	next: {
		speaker: 'Narrator',
		text: 'Before you could stand up, two shadows tower over you.',
		next: {
			speaker: 'Mom',
			text: "Ah! There's more of him over here.",
			next: {
				speaker: 'Dad',
				text: "WHO ARE YOU LOTS AND WHICH HOLE DID YOU CRAWL OUT OF?",
				next: {
					speaker: "Dad",
					text: "*Raises plough, murderous intent*",
					next: {
						speaker: 'Mom',
						text: "They mean no harm! Calm down.",
						next: {
							speaker: "Dad",
							text: "*Puts his plough down*",
							next: {
								speaker: "Dad",
								text: "What's your business here?",
								next: {
									speaker: "Players",
									text: "We just want to find our friend… <<Bob>>?",
									next: {
										speaker: "Dad",
										text: "Oh, him. That troublemaker left after I gave him a beating for trampling on my precious crops.",
										next: {
											speaker: "Mom",
											text: "Poor soul appeared out of nowhere…",
											next: {
												speaker: "Dad",
												text: "Don't pity him! He scared our son off!",
												next: {
													speaker: "Mom",
													text: "*looks to players* Have you seen a young guy…. He's not wearing much and he's…. Distressed.",
													next: {
														speaker: "Players",
														text: "I don't think…",
														next: {
															speaker: "Dad",
															text: "Our boy is really smart, but when that doofus Bob keeps bringing up nonsenses like …. What was it, <<stocks>>? And <<bonds>>? He got so upset and confused, he ran off! My sweet, sweet <<prodigal son>>! Where are you!?",
															next: {
																speaker: "Dad",
																text: "*Starts sobbing*",
																next: {
																	speaker: "Mom",
																	text: "My son takes after his dad… They're both a little bit sensitive… It would be nice if someone who's good with dealing with people's <<emotions>> could go look for my son…",
																	newUnlockedPainting: 'prodigalSon',
																	importantInfo: [
																		'The mom and the dad miss their prodigal son.',
																		'Bob was talking to him about stocks and bonds.',
																		'Someone good with emotions should look for him.'
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

export const momAndDad: PaintingDialogues = {
	player1: uniqueDialogue,
	player2: uniqueDialogue
}
