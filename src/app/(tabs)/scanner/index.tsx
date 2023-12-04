import { BarCodeScanningResult, Camera, CameraType } from 'expo-camera'
import { Button, StyleSheet, Text, View, Alert } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { BarCodeScanner } from "expo-barcode-scanner"
import { router } from 'expo-router'

import { Container } from '../../../styles/ThemedComponents'
import { useState } from 'react'
import { isPaintingId } from '../../../db/paintingIds'

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
    <Container>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.camera}
          type={CameraType.back}
          onMountError={handleCameraError}
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
    </Container>
  );
}

const cameraWidth = 350 // used in a 4:3 ratio
const cameraRatio = 1; // 4:3
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
