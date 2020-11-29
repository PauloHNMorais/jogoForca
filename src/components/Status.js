import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image as Pin } from 'react-native'

import { colors } from "../assets/colors"
import shadow from "../assets/style/shadow"
import Ionicons from "react-native-vector-icons/Ionicons"

const { width } = Dimensions.get("window")

export default ({ life, category, time }) => {

  const [lifeHearts, setLifeHearts] = useState([])

  useEffect(() => {
    let list = []

    for (let i = 0; i < 7; i++) {
      if (i < life) {
        list.push( 
          <Ionicons 
            name="heart-outline" 
            size={width / 13} 
            color="red" 
          />
        )
      } else {
        list.push( 
          <Ionicons 
            name="heart-dislike-outline" 
            size={width / 13} 
            color="rgba(255, 0, 0, 0.5)" 
          /> 
        )
      }
    }
      
    setLifeHearts(list)
  }, [life])

  return (
    <>
      <Pin style={styles.pin} source={require("../assets/img/pin.png")} />
      <View style={styles.container}>
        <Text style={styles.txt}>Tempo: {time} </Text>
        <Text style={styles.txt}>
          {lifeHearts.map(item => item)}
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    ...shadow.lg,
    padding: 8,
    width: width / 1.5,
    alignItems: "center"
  },
  txt: {
    fontFamily: "AngelasHandwriting-XjLP",
    fontSize: 24
  },
  wrongTxt: {
    fontFamily: "AngelasHandwriting-XjLP",
    fontSize: 24,
    color: "#F00"
  },
  pin: {
    width: 32,
    height: 32,
    alignSelf: "center",
    position: "relative",
    top: 10,
    elevation: 10
  }
})