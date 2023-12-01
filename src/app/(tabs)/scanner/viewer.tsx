import { Image } from 'expo-image'
import { Button } from 'react-native'
import { router } from 'expo-router'

import { Container, Text } from '../../../styles/ThemedComponents'
import { usePicture } from '../../../contexts/Picture'

export default function ScannerViewerScreen() {
  const imageWidth = 250
  
  const {picture} = usePicture()

  if (!picture) return (
    <Container>
      <Text>No picture</Text>
    </Container>
  )

  return (
    <Container>
      <Image
        style={{width: imageWidth, height: picture.height / picture.width * imageWidth}}
        source={picture.uri}
        transition={1000}
      />
      <Button onPress={() => router.push('/dialogue/momAndDad')} title="The Plough and The Song" />
      <Button onPress={() => router.push('/dialogue/harmonizing')} title="Harmonizing" />
      <Button onPress={() => router.push('/dialogue/prodigalSon')} title="The Prodigal Son" />
      <Button onPress={() => router.push('/dialogue/chair')} title="Do you want... - Bench" />
    </Container>
  )
}