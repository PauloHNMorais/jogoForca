import React, { useState, useEffect } from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'

export default ({
  next,
  index
}) => {

  return (
    <View> 
      {index == 0 && <Image style={styles.hangman} source={require("../assets/img/hangman/forca0.gif")} />}
      {index == 1 && <Image style={styles.hangman} source={require("../assets/img/hangman/forca1.gif")} />}
      {index == 2 && <Image style={styles.hangman} source={require("../assets/img/hangman/forca2.gif")} />}
      {index == 3 && <Image style={styles.hangman} source={require("../assets/img/hangman/forca3.gif")} />}
      {index == 4 && <Image style={styles.hangman} source={require("../assets/img/hangman/forca4.gif")} />}
      {index == 5 && <Image style={styles.hangman} source={require("../assets/img/hangman/forca5.gif")} />}
      {index == 6 && <Image style={styles.hangman} source={require("../assets/img/hangman/forca6.gif")} />}
      {index == "forcaDerrota" && <Image style={styles.hangman} source={require("../assets/img/hangman/forcaDerrota.gif")} />}
      {index == "forcaVitoria" && <Image style={styles.hangman} source={require("../assets/img/hangman/forcaVitoria.gif")} />}
      {index == "forcaEspera" && <Image style={styles.hangman} source={require("../assets/img/hangman/forcaEspera.gif")} />}
    </View>
  )
}

const styles = StyleSheet.create({
  hangman: {
    resizeMode: "contain",
    height: 300
  }
})