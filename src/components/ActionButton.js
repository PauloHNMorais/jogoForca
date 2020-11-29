import React from 'react'
import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Image,
  View as Corner 
} from 'react-native'

export default ({
  title,
  onPress
}) => {
  return (
    <View style={styles.btnContainer}>
      <Image source={require("../assets/img/pin.png")} style={styles.icon} />
      <TouchableOpacity 
        style={styles.btn}
        title={title} 
        onPress={onPress}  
      >
        <Text style={styles.text}> {title} </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center"
  },
  btn: {
    zIndex: -999,
    backgroundColor: "#edb879",
    transform: [{
      rotate: "10deg"
    }],
    padding: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderStyle: "solid"
  },
  text: {
    color: "#FFF",
    fontFamily: "AngelasHandwriting-XjLP",
    fontSize: 24,
  },
  icon: {
    width: 32,
    height: 32,
    position: "relative",
    top: 8,
    left: 12,
    elevation: 10
  }
})