import { DialogueNode } from '.'

export const introductionDialogue: DialogueNode = {
	speaker: 'Narrator',
	text: 'Close your eyes and imagine this:',
	next: {
		speaker: 'Narrator',
		text: 'You are sitting in a classroom, and your professor had just assigned you to a group of two other students for a group project! One of your group members is the notorious <<Bob Doe>>, who is known around school for being a bit of a devilish, mischievous guy. As you guys get to work, Bob asked to borrow an iClicker for his next class, and gave himself the liberty of  reaching into your backpacks to grab it.',
		next: {
			speaker: 'Narrator',
			text: 'Unbeknownst to Bob, you two are actually interns at Beyond-Space-and-Time Museum, and the device he had grabbed was not an iClicker, but a special Museum device! Before you two could yank it off of him, Bob started fidgeting with the device, pressed random buttons, and poof, disappeared.',
			next: {
				speaker: "Narrator",
				text: "Panic washed over, and you two ran to the Museum to report the incidence to your supervisor.",
				next: {
					speaker: "Karen *rubbed her temples*",
					text: "Player1 and Player2! You got to find Bob Doe before he gets himself in serious troubles.",
					next: {
						speaker: "Player 2 *nervously asked*",
						text: "Can’t you just… I don’t know… Check the device’s history to see where he had teleported himself to?",
						next: {
							speaker: 'Karen *sighed, reached into her desk and fished out another Museum device.*',
							text: 'He somehow managed to turn on incognito mode, and our tech guy is not here. Here, take this and <<go find Bob Doe>>.',
							next: {
								speaker: 'Player1 *took the device from Karen’s hand.*',
								text: 'How though? To be honest, we didn’t… really… pay attention to the training… the…other…day',
								next: {
									speaker: "Karen",
									text: "Of course you didn’t. Nobody does. Fine. As you all know, our Museum exists beyond Space and Time, which means that things works a little bit differently for us.",
									next: {
										speaker: "Karen",
										text: "Using the device, Museum employees could time travel, briefly experience and interact with the characters and elements of the artwork, at the time it was created.",
										next: {
											speaker: "Karen",
											text: "In order to do that, you should set the timeline of the device to the time period of the artwork, and use the camera feature to scan. We currently have three time-travelling accessible time periods: the 20th Century, the 19th Century and the 18th Century. You can not scan a piece of artwork if your device is not set to its time period, as it would rip apart the fabric of time and space! No worries though, our device has set up some safeguards, and will throw an error if you accidentally scanned an artwork from an invalid time period.",
											next: {
												speaker: "Karen",
												text: "Due to Bob’s incident, I have temporarily locked all advanced features, so the two devices you two have only have the most basic functions. As of right now, you can only access 20th Century, and thus only artwork from that period is available for scanning. If you’re lucky, you’ll find Bob somewhere within them, if not, you may have to <<figure out a way to unlock time periods before 20th Century>>",
												next: {
													speaker: "Player 2",
													text: "Shucks. But how could we do that?",
													next: {
														speaker: "Karen",
														text: "Look, I can’t be answering your questions all day. Best thing to do right now is to look. Just look and listen carefully to the characters and elements inside each artwork, will you? The Clues that you get from looking around will lead you to the Password to unlock the next time period on your devices. However, be mindful that each device requires a different password, and the password you obtain may not necessarily be for you, but for the other person.",
														next: {
															speaker: "Narrator",
															text: "A phone rang and Karen rushed to answer it, leaving Player1 and Player2 with the utmost important task of <<retrieving Bob Doe before he gets himself in even deeper trouble>>."
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
