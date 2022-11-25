import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import RegisterPage from '../RegisterPage';
import {SplashScreen} from '../SplashScreen';
import WelcomePage from '../WelcomePage';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash Screen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Register Page">
      <Stack.Screen
        name="Register Page"
        component={RegisterPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
