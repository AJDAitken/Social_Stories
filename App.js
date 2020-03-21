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



function Story_Creation() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Story Creation Screen</Text> 
      <Image source={require('./assets/Images/School/Backpack.svg')} />
    </View>
  );
} 

const Stack = createStackNavigator();

function New_Story_Details({navigation}) {
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Story Details Screen</Text> 
      <View>
        <Button
          title="Go to Story Creation"
          onPress={() => navigation.navigate('Story Creation')}
        />     
        </View>
    </View> 

  );
}

const Story_Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{ title: 'Main Menu'}}/>
        <Stack.Screen name="Details" component={New_Story_Details} />
        <Stack.Screen name="Story Creation" 
          component={Story_Creation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
 

