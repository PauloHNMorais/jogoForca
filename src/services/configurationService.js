import AsyncStorage from "@react-native-async-storage/async-storage";

let configuration = {
  showHint: true,
  showRemainingLife: true,
  time: 200
}

export async function setConfigurations(config) {
  let newConfig = configuration
  newConfig.showHint = config.showHint
  newConfig.showRemainingLife = config.showRemainingLife
  newConfig.time = config.time

  await AsyncStorage.setItem("config", JSON.stringify(newConfig))
}

export async function getConfigurations() {
  try {
    let config = await AsyncStorage.getItem("config")
    if (!config) 
      config = await AsyncStorage.setItem("config", JSON.stringify(configuration))

    let obj = JSON.parse(config)
    return obj
  } catch (error) {
    return { error }
  }
}

export async function checkConfigurations() {
  try {
    let config = await AsyncStorage.getItem("config")
    return config ? true : false
  } catch (error) {
    return { error }
  }
}