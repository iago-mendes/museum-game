import { Image } from 'expo-image'
import { Button } from 'react-native'
import { router } from 'expo-router'

import { Container, Text } from '../../../components/Themed'
import { usePicture } from '../../../contexts/Picture'

export default function ScannerViewerScreen() {
  const imageWidth = 350
  
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
      <Button onPress={() => router.push('/dialogue/harmonizing')} title="Go to harmonizing" />
      <Button onPress={() => router.push('/dialogue/chair')} title="Go to chair" />
    </Container>
  )
}