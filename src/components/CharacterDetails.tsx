import { BulletList } from "./BulletList";

export function CharacterDetails() {
	return (
		<BulletList
			title="Character Perks and Traits"
			list={[
				'Bob Doe is an <<Econ Major>>, and a member of the archery club.',
				'Player 1 Minors in <<Psychology>>, and is a member of the Pottery Co-op.',
				'Player 2 is a 3-2 <<Engineering Major>>, minors in French, and is a member of Ocircus.'
			]}
		/>
	)
}