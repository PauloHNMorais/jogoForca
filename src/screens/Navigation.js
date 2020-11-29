import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Game from "./game/Game"

const Tab = createBottomTabNavigator();

const Navigation = props => {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Play" component={Game} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation