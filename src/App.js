import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack"
import Ionicons from "react-native-vector-icons/Ionicons"

import StartScreen from "./screens/game/StartScreen"
import Game from "./screens/game/Game"
import GameOver from './screens/game/GameOver'
import Configurations from "./screens/configuration"
import { colors } from './assets/colors';

const Tab = createBottomTabNavigator();
const GameStack = createStackNavigator();

function GameStackScreen(){
  return (
    <GameStack.Navigator>
      <GameStack.Screen 
        name="StartScreen" 
        component={StartScreen} 
        options={{ headerShown: false, animationEnabled: false }} 
      />
      <GameStack.Screen 
        name="Game" 
        component={Game} 
        options={{ headerShown: false, animationEnabled: false }} 
      />
      <GameStack.Screen 
        name="GameOver" 
        component={GameOver} 
        options={{ headerShown: false, animationEnabled: false }} 
      />
      {/* <GameStack.Screen name="Win" component={Win} options={{ headerShown: false }} /> */}
    </GameStack.Navigator>
  )
}

const App = () => {
  return (
      <NavigationContainer style={styles.appContainer}> 
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              switch (route.name) {
                case "Jogar": 
                  iconName = focused ? "ios-game-controller" : "ios-game-controller-outline"
                  break
                case "Placar":
                  iconName = focused ? "podium" : "podium-outline"
                  break
                case "Opções":
                    iconName = focused ? "settings" : "settings-outline"
                    break
              }

              return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
          tabBarOptions={{
            activeTintColor: '#FFF',
            inactiveTintColor: '#000',
            style: {
              backgroundColor: colors.primary
            }
          }}
          initialRouteName="Jogar"
        >
          <Tab.Screen name="Placar" component={GameStackScreen} />
          <Tab.Screen name="Jogar" component={GameStackScreen} />
          <Tab.Screen name="Opções" component={Configurations} />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    fontFamily: "AngelasHandwriting-XjLP"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
})

export default App;
