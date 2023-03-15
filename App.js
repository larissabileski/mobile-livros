import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('./img/capa.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 200,
    height: 300,
    resizeMode: 'stretch',
  },
});

export default DisplayAnImage;
