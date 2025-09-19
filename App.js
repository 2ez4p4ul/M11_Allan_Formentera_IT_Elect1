import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import CommentSection from './CommentSection';
import ChatBubble from './ChatBubble';

export default function App() {
  return (
    <View style={styles.container}>
 <CommentSection/>
      <ChatBubble/>
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
