import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView, style, Animated, PanResponder} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image} from 'react-native' ;
import { render } from 'react-dom';




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
    <View style={styles.bottomView}>
      <ScrollView style={styles.scrollViewStyle} horizontal={true}>
      <Image source={require('./assets/Images/School/backpack.png')} style={styles.imageStyle}  />
      <Image source={require('./assets/Images/School/basketball.png')} style={styles.imageStyle}  />
      <Image source={require('./assets/Images/School/book.png')} style={styles.imageStyle}  />
      <Image source={require('./assets/Images/School/bookshelf.png')} style={styles.imageStyle}  />
      <Image source={require('./assets/Images/School/desktop.png')} style={styles.imageStyle}  />          
      </ScrollView>
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
const styles = StyleSheet.create(
  {
      MainContainer:
      {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
      },
   
      bottomView:{
   
        width: '100%', 
        height: 175, 
        backgroundColor: '#808080',
         
        alignItems: 'flex-start',       
        position: 'absolute',
        bottom: 0
      },

      imageStyle:{
        width: 150, 
        height: 150,
        justifyContent: 'space-around',
        flex:1,
        flexDirection: "row",
      },

      scrollViewStyle:{
        marginHorizontal: 20,
        marginVertical: 20
        
      },

      textStyle:{
   
        color: '#fff',
        fontSize:22
      }

  });

export default App;
 
