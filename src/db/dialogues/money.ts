import { DialogueNode, PaintingDialogues } from '.'

const uniqueDialogue: DialogueNode = {
	speaker: 'Narrator',
	text: "Ahh, the Gilded Age. Despite the extraordinary anomaly that is the appearance of a rift in time, not a soul notices your grand entrance into the bustling streets of 1890's New York. ",
	next: {
		speaker: 'Narrator',
		text: 'Standing at the intersection between Seventh Avenue and 38th Street, outside Old Dickens house, a Manhattan bar, you bumped into a troubled middle-age man.',
		next: {
			speaker: 'Victor',
			text: "*stumbles past, muttering*: Ah money is tight this month again",
			next: {
				speaker: 'Player',
				text: "Excuse me…",
				next: {
					speaker: "Victor",
					text: "Listen here, unless you got rent money for me I can't really entertain you kid.",
					next: {
						speaker: "Player",
						text: "Well I have $33, *fumbles wallet*, but that is only worth $1 here and now. Sorry I don't have much. Please, I just need to find someone. A guy who likes money as much as you do actually!",
						next: {
							speaker: "Victor",
							text: "Oh, oh, <<him>>! Ha HA, what an interesting  guy. He deeply appreciated my artistic prowess, and even asked for a few portraits of his hundred dollar bills for himself. With a mind like him, he'll surely go very far in life.",
							next: {
								speaker: "Player",
								text: "He has gone very far, too far, yes, indeed. Listen, I'm just trying to get him back actually, any ideas?",
								next: {
									speaker: "Victor",
									text: "Yeah… we got into a bit of a trouble inside the bar. Both of us didn't have enough money on hand and the someone in the United States Department of Treasury is already keeping an eye on me for counterfeit…. So I dashed, and he said he needed to <<find a cool mug for beer>> and poof disappeared into thin air.",
									next: {
										speaker: "You",
										text: "Gotcha. Thanks, Victor. Stay out of trouble!",
										next: {
											speaker: "Victor",
											text: "You stay out of trouble! <<Don't go probing at something you don't know anything about!>>",
											next: {
												speaker: "You",
												text: "What does that mean…",
												next: {
													speaker: "Narrator",
													text: "And Victor disappeared. You stood there for a while, confused. When you reached your hand inside your pocket, you discovered that your wallet is no longer there.",
													importantInfo: [
														'Bob went looking for mug.'
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

export const moneyDialogues: PaintingDialogues = {
	player1: uniqueDialogue,
	player2: uniqueDialogue
}
