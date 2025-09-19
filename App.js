import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CounterApp from './CounterApp';
import ColorChangerApp from './ColorChangerApp';
export default function App() {
  return (
    <View style={styles.container}>
      <CounterApp/>
      <ColorChangerApp/>
    </View>
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
