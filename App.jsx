/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { Platform, PermissionsAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import PlayScreen from './PlayScreen';
import PublishScreen from './PublishScreen';
import { NodeMediaClient } from 'react-native-nodemediaclient';

const Stack = createNativeStackNavigator();

const requestPermission = async () => {
  try {
    let granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool LiveStream App Camera Permission',
        message:
          'Cool LiveStream App needs access to your camera',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
    granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'Cool LiveStream App Microphone Permission',
        message:
          'Cool LiveStream App needs access to your microphone',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
  } catch (err) {
    console.warn(err);
  }
};


function App() {
  if (Platform.OS === 'ios') {
    NodeMediaClient.setLicense("");
  } else {
    requestPermission();
    NodeMediaClient.setLicense("");
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="iShow" component={HomeScreen} />
        <Stack.Screen name="Live Play" component={PlayScreen} />
        <Stack.Screen name="Live Publish" component={PublishScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;