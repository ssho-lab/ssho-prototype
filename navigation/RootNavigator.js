import * as React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer, createSwitchNavigator } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import BubbleScreen from '../src/screens/BubbleScreen';
import LogInScreen from '../src/screens/LogInScreen';
import SwipeScreen from '../src/screens/SwipeScreen';
import CardSettingScreen from '../src/screens/CardSettingScreen';
import { Switch } from 'react-native-gesture-handler';


const Home= createStackNavigator();

const state = {
    isLoggedIn: true,
}

function HomeNavigator() {
    return (
        <Home.Navigator>
            {state.isLoggedIn ? // 로그인을 한 상태
            <Home.Screen name="Home" component={MainStackNavigator}/>
            : // 로그인을 하지 않은 상태
            <Home.Screen name="Auth" component={AuthNavigator}/>
            }
        </Home.Navigator>
    );
}


const Auth= createStackNavigator();

function AuthNavigator() {
    return (
        <Auth.Navigator>
            <Auth.Screen name="LogIn" component={LogInScreen}/>
        </Auth.Navigator>
    );
}


const Main = createStackNavigator();

function MainStackNavigator() {
    return (
        <Main.Navigator>
            <Main.Screen name="Tab" component={TabNavigator}/>
            <Main.Screen name="CardSetting" component={CardSettingScreen}/>
        </Main.Navigator>
    );
}


const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Bubble" component={BubbleScreen}/>
            <Tab.Screen name="Swipe" component={SwipeScreen}/>
        </Tab.Navigator>
    );
}


const RootNavigator = () => {

  return (
      <NavigationContainer>
        <HomeNavigator/>
      </NavigationContainer>
  );
};

export default RootNavigator;
