import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  Image as Tape
} from 'react-native'

import Button from "./Button"
import { colors } from "../../assets/colors"

import shadow from "../../assets/style/shadow"

const { width, height } = Dimensions.get("window")
export default ({ onPress, secretWord }) => {
  return (
    <View>
      <Tape style={styles.tape} source={require("../../assets/img/tape.png")} />
      <Tape style={styles.tape2} source={require("../../assets/img/tape.png")} />
      <View style={styles.keyboard}> 
        <View style={styles.row}> 
          <Button letter="Q" onPress={onPress} secretWord={secretWord} />
          <Button letter="W" onPress={onPress} secretWord={secretWord} />
          <Button letter="E" onPress={onPress} secretWord={secretWord} />
          <Button letter="R" onPress={onPress} secretWord={secretWord} />
          <Button letter="T" onPress={onPress} secretWord={secretWord} />
          <Button letter="Y" onPress={onPress} secretWord={secretWord} />
          <Button letter="U" onPress={onPress} secretWord={secretWord} />
          <Button letter="I" onPress={onPress} secretWord={secretWord} />
          <Button letter="O" onPress={onPress} secretWord={secretWord} />
          <Button letter="P" onPress={onPress} secretWord={secretWord} />
        </View>
        <View style={styles.row}> 
          <Button letter="A" onPress={onPress} secretWord={secretWord} />
          <Button letter="S" onPress={onPress} secretWord={secretWord} />
          <Button letter="D" onPress={onPress} secretWord={secretWord} />
          <Button letter="F" onPress={onPress} secretWord={secretWord} />
          <Button letter="G" onPress={onPress} secretWord={secretWord} />
          <Button letter="H" onPress={onPress} secretWord={secretWord} />
          <Button letter="J" onPress={onPress} secretWord={secretWord} />
          <Button letter="K" onPress={onPress} secretWord={secretWord} />
          <Button letter="L" onPress={onPress} secretWord={secretWord} />
        </View>
        <View style={styles.row}> 
          <Button letter="Z" onPress={onPress} secretWord={secretWord} />
          <Button letter="X" onPress={onPress} secretWord={secretWord} />
          <Button letter="C" onPress={onPress} secretWord={secretWord} />
          <Button letter="V" onPress={onPress} secretWord={secretWord} />
          <Button letter="B" onPress={onPress} secretWord={secretWord} />
          <Button letter="N" onPress={onPress} secretWord={secretWord} />
          <Button letter="M" onPress={onPress} secretWord={secretWord} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  keyboard: {
    backgroundColor: colors.primary,
    width: width - 10,
    padding: 8,
    //transform: [{ rotate: "5deg" }],
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 16,
    position: "relative",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  tape: {
    width: 128,
    height: 128,
    position: "absolute",
    left: -30,
    top: -40,
    transform: [{ rotate: "90deg" }],
    opacity: 0.7,
    elevation: 10
  },
  tape2: {
    width: 128,
    height: 128,
    position: "absolute",
    left: 270,
    top: 70,
    transform: [{ rotate: "90deg" }],
    opacity: 0.7,
    elevation: 10
  },
})