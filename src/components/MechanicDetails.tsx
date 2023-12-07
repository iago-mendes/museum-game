import { BulletList } from "./BulletList";

export function MechanicDetails() {
	return (
		<BulletList
			title="Important Game Mechanics"
			list={[
				'At the start of each round, players are taken to a time period.',
				'Players may <<scan an artwork>> in order to discover information and clues and progress within the storyline',
				'When <<scanning an artwork>>, players:',
				[
					'Cannot scan a painting from a different time period than the one they are currently in.',
					'Have the ability to unlock more dialogues if they trigger the right sequence of events.',
					'Each has unique traits and perks, which means they may have different experiences scanning the same painting!'
				]
			]}
		/>
	)
}