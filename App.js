import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { startAsync } from 'expo/build/AR';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


const Stack = createStackNavigator();

function New_Story_Details({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Story Details Screen</Text> 
      <View>
      <Story_Stack.Navigator>
        <Story_Stack.Screen name="Story_Creation" 
        component={Story_Creation} />
      </Story_Stack.Navigator>
        <Button
          title="Go to Story Creation"
          onPress={() => navigation.navigate('Story_Creation')}
        />     
        </View>
    </View> 

  );
}

const Story_Stack = createStackNavigator();


function Story_Creation() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Story Creation Screen</Text> 
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{ title: 'Main Menu'}}/>
        <Stack.Screen name="Details" component={New_Story_Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
 

