import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import {SplashScreen} from '../SplashScreen';
import Home from '../Home';
import Profile from '../Profile';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash Screen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthStack"
          component={AuthenticationPageStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeStack"
          component={HomePageStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AuthenticationPageStack = () => {
  return (
    <AuthStack.Navigator initialRouteName="LoginPage">
      <AuthStack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="RegisterPage"
        component={RegisterPage}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
const HomePageStack = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="RegisterPage"
        component={Profile}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export default MainStack;
