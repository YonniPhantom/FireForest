import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importar las pantallas
import HomeScreen from '../screens/HomeScreen';
import NextScreen from '../screens/NextScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }}/>
        <Stack.Screen name="Next" component={NextScreen} options={{ title: 'Continuar' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
