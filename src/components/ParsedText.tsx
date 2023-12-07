import { StyleSheet } from "react-native";

import { Text } from "../styles/ThemedComponents";
import { parseText } from "../utils/parseText";

type ParsedTextProps = {
	text: string
}

export function ParsedText({text}: ParsedTextProps) {
	return (
		<Text style={styles.textContainer}>
			{parseText(text).map(({text, bold}, index) => (
				<Text style={bold ? styles.bold : {}} key={index}>{text}</Text>
			))}
		</Text>
	)
}

const styles = StyleSheet.create({
	textContainer: {
		textAlign: 'justify'
	},
  bold: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
})
