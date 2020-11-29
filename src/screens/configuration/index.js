import React, { useState, useEffect } from 'react'
import { Component } from 'react'
import { 
  View, 
  Text, 
  ImageBackground,
  StyleSheet
} from 'react-native'

import Switch from '../../components/Input/Switch'
import TextInput from '../../components/Input/TextInput'

import { getConfigurations, setConfigurations } from "../../services/configurationService"

export default class Configuration extends Component {
  
  state = {
    showHint: false,
    showRemainingLife: false,
    time: 200
  }
  
  async componentDidMount() {
    let config = await getConfigurations()

    if (config && !config.error) {
      this.setState({
        showHint: config.showHint,
        showRemainingLife: config.showRemainingLife,
        time: config.time
      })
    }
  }

  toggleShowHint = () => {
    this.setState({ showHint: !this.state.showHint })
    setConfigurations({
      showHint: !this.state.showHint,
      showRemainingLife: this.state.showRemainingLife,
      time: this.state.time
    })
  }

  toggleShowRemainingLife = () => {
    this.setState({ showRemainingLife: !this.state.showRemainingLife })
    setConfigurations({
      showHint: this.state.showHint,
      showRemainingLife: !this.state.showRemainingLife,
      time: this.state.time
    })
  }

  changeTime = (value) => {
    if (parseInt(value) != NaN && value > 0) {
      this.setState({ time: value })
      setConfigurations({
        showHint: this.state.showHint,
        showRemainingLife: this.state.showRemainingLife,
        time: +value
      })
    }
  }

  render() {
    return (
      <ImageBackground source={require("../../assets/img/bg.png")} style={styles.image}>
        <View style={styles.container}>
          <Switch label="Mostrar dica" value={this.state.showHint} onValueChange={this.toggleShowHint} />
          <Switch label="Mostrar vidas restantes" value={this.state.showRemainingLife} onValueChange={this.toggleShowRemainingLife} />
          <TextInput 
            label="Tempo:" 
            value={this.state.time} 
            keyboardType="numeric" 
            maxLength={3} 
            onChangeText={(value) => this.changeTime(value)}
          />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
})