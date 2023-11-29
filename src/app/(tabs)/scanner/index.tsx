import { Camera, CameraType } from 'expo-camera'
import { Button, StyleSheet, Text, View, Alert } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import { usePicture } from '../../../contexts/Picture'
import { Container } from '../../../styles/ThemedComponents'

export default function ScannerScreen() {
  let camera: Camera | null

  const [permission, requestPermission] = Camera.useCameraPermissions()
  const isFocused = useIsFocused()
  const {scanPicture} = usePicture()

  if (!permission) {
    // Camera permissions are still loading
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    )
  }

  if (!isFocused) {
    // This reloads the camera every time. It would be better to avoid this, but the camera was not
    // working properly otherwise. I'm leaving it like this temporarily.
    return null
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <Container>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </Container>
    )
  }

  function handleCameraError() {
    Alert.alert('A camera-related error occurred.')
  }

  function takePicture() {
    if (!camera) {
      return
    }

    camera.takePictureAsync() 
      .then(picture => {
        scanPicture(picture)
      })
      .catch(handleCameraError)
  }

  return (
    <Container>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.camera}
          type={CameraType.back}
          onMountError={handleCameraError}
          ref={(ref) => camera = ref}
          ratio="16:9"
        />
        <Button onPress={takePicture} title="Scan" />
      </View>
    </Container>
  )
}

const cameraWidth = 350 // used in a 4:3 ratio
const cameraRatio = 16/9; // 4:3
const styles = StyleSheet.create({
  cameraContainer: {
    width: cameraWidth,
    height: cameraWidth*cameraRatio,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
})
