import { Image } from 'expo-image'

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
    </Container>
  )
}