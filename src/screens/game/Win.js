import React from "react"
import { Component } from "react"
import { View, StyleSheet } from "react-native"

import Hangman from "../../components/Hangman"
import SecretWord from "../../components/SecretWord"
import Title from "../../components/Title"
import ActionButton from "../../components/ActionButton"

export default class Win extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Title />
          
          {/* <Status 
            category={this.state.category} 
            life={this.state.life} 
            time={this.state.time} 
            wrongLetters={this.state.wrongLetters}
          /> */}
        </View>
        <View>
          <Hangman index={"forcaVitoria"} />
        </View>
        <View>
          <SecretWord word={this.props.route.params.secretWord.toUpperCase()} />
        </View>
        <View>
          <ActionButton title="Novo Jogo" onPress={() => this.props.navigation.navigate("Game")} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  }
})