import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'

import { Text } from "../styles/ThemedComponents";
import { colors, fontSizes } from "../styles/theme";

type ButtonWithArrowProps = {
	text: string
  icon: string
	onPress: () => void
  disabled?: boolean
	style?: StyleProp<ViewStyle>
}

export function ButtonWithIcon({text, icon, onPress, disabled, style}: ButtonWithArrowProps) {
	return (
		<TouchableOpacity
      onPress={() => onPress()}
      disabled={disabled}
      style={[styles.container, disabled ? styles.disabled : {}, style]}
    >
			<Text style={styles.content}>{text}</Text>
			<FontAwesome name={icon as any} style={styles.content} />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  content: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: fontSizes.large,
  },
  disabled: {
    backgroundColor: colors.highlight,
  },
})
