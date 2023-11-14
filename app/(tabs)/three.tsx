import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import { Text, View } from '../../components/Themed';
import { usePicture } from '../../contexts/Picture';

export default function TabThreeScreen() {
  const {picture} = usePicture();

  return (
    <View style={styles.container}>
      {picture ? (
        <Image
          style={[styles.image, {width: imageWidth, height: picture.height / picture.width * imageWidth}]}
          source={picture.uri}
          transition={1000}
        />
      ) : (
        <Text>No picture</Text>
      )}
    </View>
  );
}

const imageWidth = 350;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    backgroundColor: '#0553',
  },
});
