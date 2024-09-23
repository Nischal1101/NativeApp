import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import One from './assets/One.png';
import Two from './assets/Two.png';
import Three from './assets/Three.png';
import Four from './assets/Four.png';
import Five from './assets/Five.png';
import Six from './assets/Six.png';
import {Dice} from './android/components/Dice';

function App() {
  const [image, setImage] = useState(One);
  return (
    <View style={styles.container}>
      <Dice ImageUrl={image} />
      <Pressable
        style={styles.button}
        onPress={() => {
          const randNum = Math.floor(Math.random() * 6) + 1;
          switch (randNum) {
            case 1:
              setImage(One);
              break;
            case 1:
              setImage(One);
              break;
            case 2:
              setImage(Two);
              break;
            case 3:
              setImage(Three);
              break;
            case 4:
              setImage(Four);
              break;
            case 5:
              setImage(Five);
              break;
            case 6:
              setImage(Six);
              break;
          }
        }}>
        <Text style={styles.buttontxt}>Roll the Dice</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 4,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  buttontxt: {
    color: '#000000',
    padding: 8,
  },
});
export default App;
