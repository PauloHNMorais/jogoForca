import React, { useState, useEffect } from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

export default ({ size }) => {

  return (
    <Image 
      source={require("../../assets/img/pin.png")} 
      style={styles, { width: size, height: size }} 
    />
  )
}

const styles = StyleSheet.create({
  pin: {

  }
})