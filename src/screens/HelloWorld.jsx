import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text>Brandon es Gey</Text>
    </View>
  )
}

export default HelloWorld

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  