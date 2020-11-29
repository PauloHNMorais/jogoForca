import React, { useState, useEffect, Component } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import Title from "../../components/Title"
import Status from "../../components/Status"
import Hangman from "../../components/Hangman"
import Keyboard from "../../components/Keyboard/Keyboard"
import SecretWord from "../../components/SecretWord"

import { newGame, checkLetter } from "../../services/gameService"
import initialState from "./initialState"

export default class Game extends Component {

  state = {
    secretWord: "",
    displayedWord: "",
    category: "",
    life: 7,
    time: 200,
    wrongLetters: [],
    selectedLetters: [],
    currentLetter: "",
    hangmanIndex: 0,
    selectedRightLetter: null,
    message: null
  }

  async componentDidMount() {
    const game = await newGame()

    this.setState(game)

    const interval = setInterval(() => {
      if (this.state.time > 0)
        this.setState({ time: this.state.time - 1 })
      this.checkLife()
    }, 1000);
    return () => clearInterval(interval);
  }

  checkLife = () => {
    if (this.state.life == 0 || this.state.time <= 0) {
      this.setState(initialState)
      this.props.navigation.navigate("StartScreen", {...this.state})
    }
  }

  checkWin = () => {
    if (this.state.secretWord.toUpperCase() == this.state.displayedWord.toUpperCase()) {
      this.setState(initialState)
      this.props.navigation.navigate("StartScreen", {...this.state})
    }
  }

  keyPressed = (key) => {
    const check = checkLetter(key, this.state)
    console.log(check)
    this.setState(check)

    this.checkLife()
    this.checkWin()
  }
  
  render(){

    return (
      <ImageBackground source={require("../../assets/img/bg.png")} style={styles.image}>
        <View style={styles.container}>
          <View>
            <Status life={this.state.life} time={this.state.time} />
          </View>
          <View>
            <Hangman index={this.state.hangmanIndex} />
          </View>
          <View>
            <SecretWord word={this.state.displayedWord} hint={this.state.category} />
          </View>
          <Keyboard 
            secretWord={this.state.secretWord}
            selectedRightLetter={this.state.selectedRightLetter}
            onPress={(e) => this.keyPressed(e)} 
          />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
})