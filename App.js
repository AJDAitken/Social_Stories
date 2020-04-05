import React from 'react';
import SortableGrid from 'react-native-sortable-grid';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView} from 'react-native';
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
      <Button
        title="Go to Archive"
        onPress={() => navigation.navigate('Archive')}
      />
      <Button
        title="Tutorial"
        onPress={() => navigation.navigate('Tutorial')}
      />
      <Button
        title="What are Social Stories?"
        onPress={() => navigation.navigate('How To Story')}
      />
    </View>
  );
}

function Story_Creation() {

let newImage;
  
  return (
    
    <View style={{ flex: 1, margin: (10,10,10,10)}}> 
        <SortableGrid 
        style={ flex = 6}
        blockTransitionDuration = { 400 }
        activeBlockCenteringDuration = { 200 }
        itemsPerRow = { 5 }
        >
          {
            [newImage, basketball, book, bookshelf, desktop, 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'].map( (picture_name, index) =>

              <View key={index} onTap={() => console.log("Story grid:", index, "was touched.", "Picture name:", picture_name) }> 
                
                  <Image source={picture_name} style={{width: 150, height: 150}}/>
              </View>
              )
          }
        </SortableGrid>
      <View style={styles.bottomView}>
        <ScrollView style={styles.scrollViewStyle} horizontal={true}>
        <TouchableOpacity onPress={ ()=> newImage = backpack} >
        <Image source={backpack} style={styles.imageStyle}  />
          
        </TouchableOpacity>
          <Image source={basketball} style={styles.imageStyle}  />
          <Image source={book} style={styles.imageStyle}  />
          <Image source={bookshelf} style={styles.imageStyle}  />
          <Image source={desktop} style={styles.imageStyle}  />          
        </ScrollView>
        
      </View>   
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

function Archive(){
  return(
    <View>
      <Text>
        Placeholder for the archive
      </Text>
    </View>
    );

}


export default class Social_Stories extends React.Component{
  constructor(){
    super()

  }


  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Main Menu'}}/>
          <Stack.Screen name="Details" component={New_Story_Details} />
          <Stack.Screen name="Story Creation" component={Story_Creation} />
          <Stack.Screen name="Tutorial" component={Tutorial} />
          <Stack.Screen name="How To Story" component={How_To_Story} />
          <Stack.Screen name="Archive" component={Archive} />
        </Stack.Navigator>
      </NavigationContainer>
    );
    }
}


const backpack = require("./assets/Images/School/backpack.png");
const basketball = require('./assets/Images/School/basketball.png');
const book = require('./assets/Images/School/book.png');
const bookshelf =  require('./assets/Images/School/bookshelf.png');
const desktop =  require('./assets/Images/School/desktop.png');

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
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20
        
      },

      textStyle:{
   
        color: '#fff',
        fontSize:22
      }

  });

//export default Social_Stories;
 
