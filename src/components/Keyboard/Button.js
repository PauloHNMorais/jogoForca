import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get("window")

export default ({ letter, onPress, secretWord }) => {
  const [disabled, setDisabled] = useState(false)
  const [customStyle, setCustomStyle] = useState(styles.letter)

  function setButtonColor() {
    if (secretWord.includes(letter)) 
      setCustomStyle(styles.rightLetter)
    else 
    setCustomStyle(styles.wrongLetter)
  }

  function press() {
    setDisabled(true)
    onPress(letter)

    setButtonColor()
  }


  return (
    <TouchableOpacity 
      style={styles.button} 
      onPress={press}
      disabled={disabled}
    >
      <Text style={customStyle}> {letter || "?"} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  letter: {
    fontSize: width / 11,
    fontFamily: "AngelasHandwriting-XjLP"
  },
  rightLetter: {
    fontSize: width / 10,
    fontFamily: "AngelasHandwriting-XjLP",
    textDecorationLine: "line-through",
    color: "#00880044"
  },
  wrongLetter: {
    fontSize: width / 10,
    fontFamily: "AngelasHandwriting-XjLP",
    textDecorationLine: "line-through",
    color: "#88000044"
  },
  button: {
    padding: 4
  }
})