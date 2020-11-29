import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default props => {
  return (
    <Text style={styles.title}>Forca</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "AngelasHandwriting-XjLP",
    fontSize: 48
  }
})