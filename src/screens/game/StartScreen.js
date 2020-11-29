import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

import Title from "../../components/Title"
import Hangman from "../../components/Hangman"
import ActionButton from "../../components/ActionButton"
import SecretWord from "../../components/SecretWord"
import TapeMessage from '../../components/TapeMessage'

import { colors } from "../../assets/colors"

export default ({ navigation, route }) => {
  const [index, setIndex] = useState("forcaEspera")
  const [message, setMessage] = useState()
  const [word, setWord] = useState()
  const [hint, setHint] = useState()
  const [color, setColor] = useState()

  useEffect(() => {
    if (route && route.params) {
      setIndex(route.params.hangmanIndex)
      setWord(route.params.secretWord.toUpperCase())
      setHint(route.params.category)
      setMessage(route.params.message)

      if (route.params.life == 0 || route.params.time == 0)
        setColor(colors.error)
      else 
        setColor(colors.success)
    }
  }, [route])

  function newGame() {
    setIndex("forcaEspera")
    setWord()
    setHint()
    setMessage()
    navigation.navigate("Game")
  }

  return (
    <ImageBackground source={require("../../assets/img/bg.png")} style={styles.image}>
      {message && <TapeMessage color={color} text={message} />}
      <View style={styles.container}>
        <View>
          <Title />
        </View>
        <View>
          <Hangman index={index} />
        </View>
        <View>
          {word && hint && <SecretWord word={word} hint={hint} />}
        </View>
        <View>
          <ActionButton title="Novo Jogo" onPress={() => newGame()} />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
    elevation: 10
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
})