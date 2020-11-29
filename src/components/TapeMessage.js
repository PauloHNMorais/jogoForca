import React from 'react'
import { 
  StyleSheet, 
  Image as Tape, 
  Text, 
  View, 
  Dimensions 
} from 'react-native'

import { colors } from "../assets/colors"
import shadow from "../assets/style/shadow"

const { width, height } = Dimensions.get("window")

export default ({ text, color }) => {
  return (
    <View style={styles.container}>
      <Tape size={48} style={styles.tape} source={require("../assets/img/tape.png")} />
      <View style={{...styles.card, backgroundColor: color || colors.primary}}>
        <Text style={styles.text}> {text} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    elevation: 1000
  },
  card: {
    //backgroundColor: colors.primary,
    alignItems: "center",
    padding: 8,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 16,
    position: "relative",
    top: height / 6,
    transform: [{ rotate: "-15deg" }],
    ...shadow.md
  },
  text: {
    fontFamily: "AngelasHandwriting-XjLP",
    letterSpacing: 1,
    fontSize: width / 10,
    color: "#000"
  },
  tape: {
    width: 120,
    height: 100,
    position: "absolute",
    transform: [{ rotate: "120deg" }],
    top: 70,
    alignSelf: "center",
    elevation: 10
  },
})