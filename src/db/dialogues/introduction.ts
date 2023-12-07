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
				text: "[need to put rest of introduction]",
			}
		}
	}
}
