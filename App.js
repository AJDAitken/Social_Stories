import React, { Component, useState } from 'react';
//import SortableGrid from 'react-native-sortable-grid';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, ScrollView, Image, FlatList, PanResponder, Animated} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import story from'./Story_Creation';
import archive from'./Archive';
//import archiveArray from'./Story_Creation';
import { render } from 'react-dom';
//import {Screen_1, Screen_2, Screen_3, Screen_4, Screen_5, Screen_6} from './Story_Creation'



function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center' ,justifyContent: "space-around"}}>
      <Text style={styles.textStyle} >MyStory</Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          style={styles.menuButtons}
        >
          <Text style={styles.textStyle}>Create New Story</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tutorial')}
          style={styles.menuButtons}
        >
          <Text style={styles.textStyle}>Tutorial</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('How To Story')}
          style={styles.menuButtons}
        >
          <Text style={styles.textStyle}>What are Social Stories?</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}




function New_Story_Details({navigation}) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Story Details Screen</Text> 
        <View>
          <Button
            title="Go to Story Creation"
            onPress={() => navigation.navigate('Story Creation')}
            color="#000080"
          />     
          </View>
      </View> 
    
  );
}

function Tutorial(){
  return(
  <View>
    <Text>
      tutorial test text
    </Text>
  </View>
  );
}

function How_To_Story(){
  return(
  <View>
    <Text>
      What is a social story, and how the heck do you make one?? 
    </Text>
  </View>
  );
}


const Stack = createStackNavigator();


export default class Social_Stories extends React.Component{
  constructor(props){
    super(props);

}

  render(){

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Main Menu'}}/>
          <Stack.Screen name="Details" component={New_Story_Details} />
          <Stack.Screen name="Story Creation" component={story.render} />
          <Stack.Screen name="Tutorial" component={Tutorial} />
          <Stack.Screen name="How To Story" component={How_To_Story} />
          <Stack.Screen name="Archive" component={archive.render} />
        </Stack.Navigator>
      </NavigationContainer>
    );
    }
    
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
      menuButtons:{
        width: '70%',
        height: 100,
        margin: 120,
        borderWidth: 1,
        borderColor: '#333333',
        backgroundColor: '#fffdd0',
      },
      bottomView:{
   
        width: '100%', 
        height: 175, 
        backgroundColor: '#808080',
         
        alignItems: 'flex-start',       
        position: 'absolute',
        bottom: 0
      },
      item: {
        //currently unused
        backgroundColor: '#f9c2ff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        flex: 1,
        margin: 1,
        //marginHorizontal: 5,
        //marginVertical: 10,
        //height: Dimensions.get('window').width - 175/5,
      },
      imageStyle:{
        width: 150, 
        height: 150,
        justifyContent: 'space-around',
        flex:1,
        flexDirection: "row",
      },

      scrollViewStyle:{
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20       
      },
      textStyle:{
        fontSize: 39,
        textAlign: 'center',
      },
      row:{
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: "space-around",
        //margin: 1,
        marginHorizontal: 1,
        marginVertical: 1,
      }

  });

  
//export default Social_Stories;
 
