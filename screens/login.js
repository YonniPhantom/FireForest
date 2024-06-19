import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet,Text,View,TouchableOpacity,Linking,Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
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
