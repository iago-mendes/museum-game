import { Text as DefaultText, View as DefaultView } from 'react-native';

import { colors, fontSizes } from './theme'

export function Text(props: DefaultText['props']) {
  const { style, ...otherProps } = props;

  return (
    <DefaultText
      style={[{
        color: colors.text,
        fontSize: fontSizes.normal
      }, style]}
      {...otherProps}
    />
  )
}

export function View(props: DefaultView['props']) {
  const { style, ...otherProps } = props;

  return (
    <DefaultView
      style={[{
        backgroundColor: colors.background
      }, style]}
      {...otherProps}
    />
  )
}

export function Container(props: DefaultView['props']) {
  const { style, ...otherProps } = props

  return (
    <View
      style={[{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }, style]}
      {...otherProps}
    />
  )
}
