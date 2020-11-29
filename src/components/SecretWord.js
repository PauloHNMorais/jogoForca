import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, Dimensions } from 'react-native'

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getConfigurations } from "../services/configurationService"

export default ({ word, hint }) => {
  const [config, setConfig] = useState()

  async function getConfig() {
    setConfig(await getConfigurations())
  }

  useEffect(() => getConfig(), [])

  return (<>
    <Text style={styles.word}> {word} </Text>
    <Text style={styles.hint}> Dica: {hint} </Text>
  </>)
}

const styles = StyleSheet.create({
  word: {
    fontSize: RFPercentage(5),
    letterSpacing: 10,
  },
  hint: {
    alignSelf: "center",
    fontSize: 28,
    fontFamily: "AngelasHandwriting-XjLP"
  }
})