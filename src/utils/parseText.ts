type ParsedText = {
	bold: boolean
	text: string
}

// Parse text to separate bold text from normal text.
export function parseText(text: string): ParsedText[] {
	const textParts: ParsedText[] = []

	let bold = false
	
	text.split('<<').forEach(tmpPart => {
		tmpPart.split('>>').forEach(part => {
			textParts.push({text: part, bold})
			bold = !bold
		})
	})

	return textParts
}