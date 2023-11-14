import { Camera, CameraType } from 'expo-camera';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { router } from 'expo-router';

import { usePicture } from '../contexts/Picture';

export default function CameraPreview() {
  let camera: Camera | null;

  const [permission, requestPermission] = Camera.useCameraPermissions();
  const isFocused = useIsFocused();
  
  const {setPicture} = usePicture();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!isFocused) {
    // This reloads the camera every time. It would be better to avoid this, but the camera was not
    // working properly otherwise. I'm leaving it like this temporarily.
    return null;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function handleCameraError() {
    Alert.alert('A camera-related error occurred.');
  }

  function takePicture() {
    if (!camera) {
      return;
    }

    camera.takePictureAsync() 
      .then(picture => {
        setPicture(picture)
        router.push('/(tabs)/three')
      })
      .catch(handleCameraError);
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={CameraType.back} onMountError={handleCameraError} ref={(ref) => camera = ref}>
      </Camera>
      <Button onPress={takePicture} title="take photo" />
    </View>
  );
}

const cameraSize = 125; // used in a 4:3 ratio
const styles = StyleSheet.create({
  container: {
    width: 3*cameraSize,
    height: 4*cameraSize,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
