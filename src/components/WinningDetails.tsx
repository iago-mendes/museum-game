import { BulletList } from "./BulletList";

export function WinningDetails() {
	return (
		<BulletList
			title="Win Condition"
			subtitle="Players win when they arrive at the last round and is able to retrieve Bob Doe from whatever trouble he has gotten himself in."
			list={[
				'In order to advance to the next round (or time period), each player must find <<the correct password>>, which is obtained through interacting with artworks, and enter them into their individual devices.',
				[
					'Very important: Each player will need a different password to advance to the next round. Sometimes the password you stumble upon might not be for you, but for your teammate!',
				]
			]}
		/>
	)
}