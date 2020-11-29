import React, { useState, useEffect } from 'react'
import { 
  Text, 
  TextInput,
  TouchableOpacity, 
  StyleSheet,
  Image as Tick,
  Image as Cross,
  View
} from 'react-native'

export default ({
  label,
  value,
  keyboardType,
  size,
  onChangeText,
  maxLength
}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}> {label} </Text> 
      <TextInput 
        style={styles.input} 
        value={`${value}`} 
        keyboardType={keyboardType || "default"} 
        maxLength={maxLength || 3} 
        onChangeText={e => onChangeText(e)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "AngelasHandwriting-XjLP",
    fontSize: 28
  },
  input: {
    fontFamily: "AngelasHandwriting-XjLP",
    fontSize: 28,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    paddingTop: 0,
    paddingBottom: 0,
    width: 50
  },
  icon: {
    
  },
  container: {
    flexDirection: "row"
  }
})