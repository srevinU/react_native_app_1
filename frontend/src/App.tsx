import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NavBar from './components/web/navbar';

const App = () => {
  return (
    <View style={styles.container}>
      <NavBar></NavBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;