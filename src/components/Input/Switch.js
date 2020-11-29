import React, { useState, useEffect } from 'react'
import { 
  Text, 
  View, 
  TouchableOpacity, 
  StyleSheet,
  Image as Tick,
  Image as Cross
} from 'react-native'

export default ({
  label,
  value,
  size,
  onValueChange
}) => {
  const [isEnabled, setIsEnabled] = useState(value || false)
  const [iconStyle, setIconStyle] = useState()
  const [txtStyle, setTxtStyle] = useState()

  useEffect(() => {
    setTxtStyle({ ...styles.text, fontSize: size || 28 })
    setIconStyle({ ...styles.icon, width: size || 28, height: size || 28 })
  }, [])

  return (
    <TouchableOpacity onPress={onValueChange} style={styles.btn}>
      {value == true && <Tick source={require("../../assets/img/tick.png")} style={iconStyle} /> }
      {value == false && <Cross source={require("../../assets/img/cross.png")} style={iconStyle} /> }
      <Text style={txtStyle}> {label} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "AngelasHandwriting-XjLP",
  },
  icon: {
    
  },
  btn: {
    flexDirection: "row"
  }
})