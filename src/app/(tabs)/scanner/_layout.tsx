import { Stack } from 'expo-router'

export default function ScannerLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="viewer" options={{ headerShown: false }} />
    </Stack>
  )
}
