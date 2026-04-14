import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const FirstScreenStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="FirstScreen"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
        />
      </Stack.Navigator>
  );
}

const SecondScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SecondScreen"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}/>
      <Stack.Screen
        name="ThirdPage"
        component={ThirdScreen}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef', //Set Drawer background
            width: 250, //Set Drawer width
          },
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}>
        <Drawer.Screen
          name="FirstScreen"
          options={{
            drawerLabel: 'First Screen Option',
            title: 'First Stack'
          }}
          component={FirstScreenStack} />
        <Drawer.Screen
          name="SecondScreen"
          options={{
            drawerLabel: 'Second page Option',
            title: 'Second Stack'
          }}
          component={SecondScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;