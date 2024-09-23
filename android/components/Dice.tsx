import React from 'react';
import {StyleSheet, Image, ImageSourcePropType} from 'react-native';

export function Dice({ImageUrl}: {ImageUrl: ImageSourcePropType}) {
  return <Image style={styles.Image} source={ImageUrl} />;
}

const styles = StyleSheet.create({
  Image: {
    height: 200,
    width: 200,
  },
});
