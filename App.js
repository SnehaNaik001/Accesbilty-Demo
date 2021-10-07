/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const onPress = ()=>{
  alert('hiiiiii');
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text style={styles.hisghlight}>App.js</Text>
      </View>
      <TouchableOpacity accessibilityTraits="none" />
      <TouchableOpacity accessibilityHint="Navigates to the previous screen" accessibilityLabel="Go back" />
      {/* <TouchableOpacity accessibilityLabel="Go back" /> */}


      <Text style={styles.buttonText}  accessibilityHint="backbutton" accessibilityLabel="button" accessibilityRole="header"
      >check satus</Text>

      <TouchableOpacity
        accessible={true}
        onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Press me!</Text>
        </View>
    </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  button: {
    borderColor: 'red',
  },
  buttonText: {
    fontWeight: '700',
  },
});

export default App;
