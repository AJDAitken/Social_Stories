import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, ScrollView, Image, FlatList, Dimensions} from 'react-native';
import { render } from 'react-dom';



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
    
        isSet(archiveArray){
          if(currentGrid != archiveArray){
            setGrid(archiveArray);
            }
            return currentGrid;
        }
        
      render(archiveArray){

        const [currentGrid, setGrid]= useState(initialGrid);
        
        
        
        const initialGrid = [
          {
          id: '0',
          title: 'Grid 0',
          imageSource: 'blank',
          },
          {
          id: '1',
          title: 'Grid 1',
          imageSource: 'blank',
          },
          {
          id: '2',
          title: 'Grid 2',
          imageSource: 'blank',
          },
          {
          id: '3',
          title: 'Grid 3',
          imageSource: 'blank',
          },
          {
          id: '4',
          title: 'test5',
          imageSource: 'blank',
          },
          {
          id: '5',
          title: 'test6',
          imageSource: 'blank',
          },
          {
          id: '6',
          title: 'test7',
          imageSource: 'blank',
          },
          {
          id: '7',
          title: 'test8',
          imageSource: 'blank',
          },
          {
          id: '8',
          title: 'test9',
          imageSource: 'blank',
          },
          {
          id: '9',
          title: 'test10',
          imageSource: 'blank',
          },
          {
          id: '10',
          title: 'Grid 0',
          imageSource: 'blank',
          },
          {
          id: '11',
          title: 'Grid 1',
          imageSource: 'blank',
          },
          {
          id: '12',
          title: 'test3',
          imageSource: 'blank',
          },
          {
          id: '13',
          title: 'test4',
          imageSource: 'blank',
          },
          {
          id: '14',
          title: 'test5',
          imageSource: 'blank',
          },
          {
          id: '15',
          title: 'test6',
          imageSource: 'blank',
          },
          {
          id: '16',
          title: 'test7',
          imageSource: 'blank',
          },
          {
          id: '17',
          title: 'test8',
          imageSource: 'blank',
          },
          {
          id: '18',
          title: 'test9',
          imageSource: 'blank',
          },
          {
          id: '19',
          title: 'test10',
          imageSource: 'blank',
          },
          {
          id: '20',
          title: 'Grid 0',
          imageSource: 'blank',
          },
          {
          id: '21',
          title: 'Grid 1',
          imageSource: 'blank',
          },
          {
          id: '22',
          title: 'test3',
          imageSource: 'blank',
          },
          {
          id: '23',
          title: 'test4',
          imageSource: 'blank',
          },
          {
          id: '24',
          title: 'test5',
          imageSource: 'blank',
          },
        ];
        return(
         <View>
              <Image source={archiveArray} style={{height:500, width:500}}/>
                  <FlatList
                  data={currentGrid}
                  style={styles.gridContainer}
                  //extraData={}
                  renderItem={({ item }) =><View ><Item imageSource={item.imageSource}/></View> }
                  keyExtractor={item => item.id}
                  numColumns={5}
                  columnWrapperStyle={styles.row}
                  
                  />
                
                
                
        </View>
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