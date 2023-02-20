import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {auth} from './database/firebase';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import Login from './screens/login';
import Signup from './screens/signup';
import Dashboard from './screens/dashboard';
import Forgot from './screens/forgot';
import Boards from "./screens/Boards";
import Note from "./screens/Note";
import NoteAdd from "./screens/NoteAdd";
import Notes from "./screens/Notes";

const Stack = createStackNavigator();
function MyStack() {
    const user = auth.currentUser;
    var initialRouteAuth = "Login";
    if (user !== null) {
        console.log();
        initialRouteAuth = "Dashboard";
    }
    const initialRoute = initialRouteAuth;
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={
            { title: 'Signup' },
            {headerShown: false}
        }
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={
          {title: 'Login'},
          {headerLeft: null},
          {headerShown: false}
        }
      />
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        options={
            {title: 'Forgot Password'},
            {headerLeft: null},
            {headerShown: false}
        }
      />
      <Stack.Screen
       name="Dashboard"
       component={Dashboard}
       options={
         { title: 'Dashboard' },
         {headerLeft: null},
         {headerShown: false}
       }
      />
      <Stack.Screen
        name="Boards"
        component={Boards}
        options={
            { title: 'Boards' },
            {headerLeft: null},
            {headerShown: false}
        }
      />
      <Stack.Screen
        name="Notes"
        component={Notes}
        options={
            { title: 'Notes' },
            {headerLeft: null},
            {headerShown: false}
        }
      />
      <Stack.Screen
        name="Note"
        component={Note}
        options={
            { title: 'Note' },
            {headerLeft: null},
            {headerShown: false}
        }
      />
      <Stack.Screen
        name="NoteAdd"
        component={NoteAdd}
        options={
            { title: 'NoteAdd' },
            {headerLeft: null},
            {headerShown: false}
        }
      />
    </Stack.Navigator>
  );
}
export default function App() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    async function loadResourcesAsync() {
      await Promise.all([
        Font.loadAsync({
          "roboto-italic": require("./assets/fonts/roboto-italic.ttf"),
          "roboto-regular": require("./assets/fonts/roboto-regular.ttf")
        })
      ]);
    }
    function handleLoadingError(error) {
      console.warn(error);
    }
    function handleFinishLoading(setLoadingComplete) {
      setLoadingComplete(true);
    }
    if (!isLoadingComplete) {
        return (
        <AppLoading
            startAsync={loadResourcesAsync}
            onError={handleLoadingError}
            onFinish={() => handleFinishLoading(setLoadingComplete)}
        />
        );
    } else {
        return (
            <NavigationContainer>
              <MyStack />
            </NavigationContainer>
        );
    }
}
