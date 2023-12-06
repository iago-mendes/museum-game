import { BarCodeScanningResult, Camera, CameraType } from 'expo-camera'
import { Button, StyleSheet, Text, View, Alert } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { BarCodeScanner } from "expo-barcode-scanner"
import { router } from 'expo-router'

import { Container } from '../../styles/ThemedComponents'
import { useState } from 'react'
import { isPaintingId } from '../../db/paintingIds'
import { ButtonWithIcon } from '../../components/ButtonWIthIcon'

export default function ScannerScreen() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const isFocused = useIsFocused();

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
    Alert.alert("A camera-related error occurred.");
  }

  // Scan code when hover phone in front of the QR code
  const handleBarCodeScanned = ({ type, data }: BarCodeScanningResult) => {
    if (scanned) {
      return
    }
    
    setScanned(true);
    if (type == BarCodeScanner.Constants.BarCodeType.qr) {
      if (isPaintingId(data))
        router.push(`/dialogue/${data}`);
      else
        Alert.alert(`Wrong painting scanned (${data})`);
    } else {
      Alert.alert(`Wrong type of qr code scanned (${type})`);
    }
  };

  return (
    <Container style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.camera}
          type={CameraType.back}
          onMountError={handleCameraError}
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
          onBarCodeScanned={handleBarCodeScanned}
          ratio="1:1"
        />
      </View>
      {scanned && (
        <ButtonWithIcon
          text="Scan Again"
          icon="repeat"
          onPress={() => setScanned(false)}
          style={styles.buttom}
        />
      )}
    </Container>
  );
}

const cameraWidth = 350
const cameraRatio = 1/1
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingTop: 150,
    gap: 50,
  },
  cameraContainer: {
    width: cameraWidth,
    height: cameraWidth*cameraRatio,
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  camera: {
    flex: 1,
  },
  buttom: {
    width: '50%',
    justifyContent: 'center',
  }
})
