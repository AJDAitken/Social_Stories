import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, ScrollView, Image, FlatList, Dimensions} from 'react-native';
import { render } from 'react-dom';


  
function addToArchive(archiveArray){
    
      
    
    //console.log(archiveArray);

    //function setNewStory(archiveArray){
    //    setStory(archiveArray);
    //} 
    
    return(
            <View>
                <Image source={archiveArray} style={{width: 250, height: 250}}/>
            </View>
    )
}

function Item({ imageSource }) {
    
    return(
      <View style={styles.row}>
       <Image source={imageSource} style={styles.imageStyle}/>       
      </View>
    );
  
  }

class ArchiveClass extends Component{
    constructor(props){
        super(props);
        
        
        };
    
    arrayState(){
        const [currentStory, setStory]= useState(archiveArray);

        const changeOfStory = async archiveArray => {
          await setStory(archiveArray);
        const [currentStory, setStory]= useState(archiveArray);
          addToArchive(currentStory);
        }

        //creates an infinite loop
        if(archiveArray != null){
          changeOfStory();   
        }
        else{
          console.log("ERROR: Array not passed correctly");
        };
    }
        
      render(archiveArray){
        return(

          addToArchive(archiveArray)

        );
    }

}

const archive = new ArchiveClass();
export default archive;

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
        }, 
         gridContainer:{
          borderWidth:1,
          borderColor: '#d3d3d3',
          //flex = 6,
         },
        bottomView:{
     
          width: '100%', 
          height: '20%', 
          backgroundColor: '#808080',
          justifyContent:'space-around',
          alignItems: 'center',       
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
          paddingTop: 10,
          //flex: 1,
          position:"relative",
          marginHorizontal: 10,
          //marginVertical: 10,     
        },
        textStyle:{
     
          color: '#fff',
          fontSize:22
        },
        row:{ 
          backgroundColor: '#ffffff',
          flex: 1,
          justifyContent: "space-around",
          //margin: 1,
          marginHorizontal: 1,
          marginVertical: 1,
        },
        scrollButtonFlex:{
          //flex:1,
          justifyContent: 'space-around',
          flexDirection: "row",
          position:"relative",
          marginBottom:100,
          flexWrap:"wrap", //incase too many buttons for one line, make new line
          //width: 1000,
          height: 100,
        },
        scrollButton:{
          //paddingRight: 75,
          //height: "50%",
        },
        topRightButton:{
          flexDirection: "row-reverse",
          width: 120,
          height: 40,
        }
  
    });