import React from 'react';
import {
  View,
  Text,
  useColorScheme,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.whiteText}>
        Hello from react-native
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  whiteText: {
    color: '#ffffff',
  },
  darkText: {
    color: '#000000',
  },
});
export default App;
