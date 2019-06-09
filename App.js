import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CameraPage from './src/camera.page';

export default function App() {
  return (
    <CameraPage />
    // <View style={styles.container}>
    //   <Text>asd</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
