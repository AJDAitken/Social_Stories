import React, { Component, useState } from 'react';
//import SortableGrid from 'react-native-sortable-grid';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, ScrollView, Image, FlatList, PanResponder, Animated} from 'react-native';
import update from 'immutability-helper';
//import 'react-native-gesture-handler';
import { render } from 'react-dom';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




  const schoolImages = [
    require('./assets/Images/School/backpack.png'),
    require('./assets/Images/School/basketball.png'),
    require('./assets/Images/School/book.png'),
    require('./assets/Images/School/bookshelf.png'),
    require('./assets/Images/School/desktop.png'),
    require('./assets/Images/School/diploma.png'),
    require('./assets/Images/School/ebook_1.png'),
    require('./assets/Images/School/ebook.png'),
    require('./assets/Images/School/flask.png'),
    require('./assets/Images/School/idea.png'),
    require('./assets/Images/School/mortarboard.png'),
    require('./assets/Images/School/open_book.png'),
    require('./assets/Images/School/school_bus.png'),
    require('./assets/Images/School/school_material_1.png'),
    require('./assets/Images/School/school_material.png'),
    require('./assets/Images/School/school.png'),
    require('./assets/Images/School/student.png'),
    require('./assets/Images/School/teacher.png'),
    require('./assets/Images/School/trumpet.png'),
    require('./assets/Images/School/uniform.png'),
  ]
  
  const Medical = [
    require('./assets/Images/Medical/bacteria.png'),
    require('./assets/Images/Medical/band_aid.png'),
    require('./assets/Images/Medical/blood_donation.png'),
    require('./assets/Images/Medical/blood_transfusion.png'),
    require('./assets/Images/Medical/brain.png'),
    require('./assets/Images/Medical/cardiogram.png'),
    require('./assets/Images/Medical/dna.png'),
    require('./assets/Images/Medical/injury.png'),
    require('./assets/Images/Medical/intestine.png'),
    require('./assets/Images/Medical/kidneys.png'),
    require('./assets/Images/Medical/medicine.png'),
    require('./assets/Images/Medical/placeholder.png'),
    require('./assets/Images/Medical/radiography.png'),
    require('./assets/Images/Medical/smartphone.png'),
    require('./assets/Images/Medical/smartwatch.png'),
    require('./assets/Images/Medical/stethoscope.png'),
    require('./assets/Images/Medical/syringe.png'),
    require('./assets/Images/Medical/test_tube.png'),
    require('./assets/Images/Medical/tooth.png'),
    require('./assets/Images/Medical/vision.png'),
  ]

function Item({ imageSource }) {
    
    return(
      <View style={styles.row}>
        <Image source={imageSource} style={styles.imageStyle}  />       
      </View>
    );
  
  }
  
const Story_Creation = () =>{
  

  //KEEP MINAMISED - will refactor later if time, dont judge my hard coded rubbish
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
      {
      id: '25',
      title: 'test6',
      imageSource: 'blank',
      },
      {
      id: '26',
      title: 'test7',
      imageSource: 'blank',
      },
      {
      id: '27',
      title: 'test8',
      imageSource: 'blank',
      },
      {
      id: '28',
      title: 'test9',
      imageSource: 'blank',
      },
      {
      id: '29',
      title: 'test10',
      imageSource: 'blank',
      },
    ];

  const [currentGrid, setGrid]= useState(initialGrid);

  
    addImage = (src,index, initialGrid) =>{

      console.log("GOT TO ADDIMAGE METHOD");
      //console.log(src,index, initialGrid);

      const tempGrid = [...initialGrid];
      let i = tempGrid.findIndex(tempGrid => tempGrid.imageSource === 'blank');
      console.log("First empty space in the grid: ", i);
      tempGrid[i] = {...tempGrid[i], imageSource: (schoolImages[src, index])};
      //console.log(tempGrid);
      
      setGrid(tempGrid);
      //this.setState({initialGrid: tempGrid});
       
  }

  return (
    
    <SafeAreaView style={{ flex: 1, margin: (10,10,10,10)}}> 
      <FlatList
      data={currentGrid}
      //extraData={}
      renderItem={({ item }) => <Item imageSource={item.imageSource}/>}
      keyExtractor={item => item.id}
      numColumns={5}
      columnWrapperStyle={styles.row}
      />
    
      <View style={styles.bottomView}>
        <ScrollView  style={styles.scrollViewStyle} horizontal={true}> 

        
        {
          //this.addImage.bind(this, src, index)
          //prints out the schoolImage array, may chnage to drag and drop system
            schoolImages.map( (src, index) =>
                
              <View key={index} > 
                <TouchableOpacity onPress ={this.addImage.bind(this, src, index, currentGrid)} style={styles.imageStyle} >
                  
                  <Image source={src} style={styles.imageStyle}/>
                  
                </TouchableOpacity>
              </View>
              )
          } 
                   
        </ScrollView>
        
      </View>   
    </SafeAreaView>
    
  );
  
  
        
}

class Social_Story_Creation extends Component{
    constructor(props){
        super(props);
        this.state = {
            initialGrid: [
              {
              id: '0',
              title: 'Grid 0',
              imageSource: '',
              },
              {
              id: '1',
              title: 'Grid 1',
              imageSource: '',
              },
              {
              id: '2',
              title: 'Grid 2',
              imageSource: '',
              },
              {
              id: '3',
              title: 'Grid 3',
              imageSource: require('./assets/Images/School/ebook_1.png'),
              },
              {
              id: '4',
              title: 'test5',
              imageSource: '',
              },
              {
              id: '5',
              title: 'test6',
              imageSource: '',
              },
              {
              id: '6',
              title: 'test7',
              imageSource: '',
              },
              {
              id: '7',
              title: 'test8',
              imageSource: '',
              },
              {
              id: '8',
              title: 'test9',
              imageSource: '',
              },
              {
              id: '9',
              title: 'test10',
              imageSource: '',
              },
              {
              id: '10',
              title: 'Grid 0',
              imageSource: '',
              },
              {
              id: '11',
              title: 'Grid 1',
              imageSource: '',
              },
              {
              id: '12',
              title: 'test3',
              imageSource: '',
              },
              {
              id: '13',
              title: 'test4',
              imageSource: '',
              },
              {
              id: '14',
              title: 'test5',
              imageSource: '',
              },
              {
              id: '15',
              title: 'test6',
              imageSource: '',
              },
              {
              id: '16',
              title: 'test7',
              imageSource: '',
              },
              {
              id: '17',
              title: 'test8',
              imageSource: '',
              },
              {
              id: '18',
              title: 'test9',
              imageSource: '',
              },
              {
              id: '19',
              title: 'test10',
              imageSource: '',
              },
              {
              id: '20',
              title: 'Grid 0',
              imageSource: '',
              },
              {
              id: '21',
              title: 'Grid 1',
              imageSource: '',
              },
              {
              id: '22',
              title: 'test3',
              imageSource: '',
              },
              {
              id: '23',
              title: 'test4',
              imageSource: '',
              },
              {
              id: '24',
              title: 'test5',
              imageSource: '',
              },
              {
              id: '25',
              title: 'test6',
              imageSource: '',
              },
              {
              id: '26',
              title: 'test7',
              imageSource: '',
              },
              {
              id: '27',
              title: 'test8',
              imageSource: '',
              },
              {
              id: '28',
              title: 'test9',
              imageSource: '',
              },
              {
              id: '29',
              title: 'test10',
              imageSource: '',
              },
          ]
        
        };
        //this.updateGrid = this.updateGrid.bind(this);
        
    }
    
      render(){
        return(
          Story_Creation()
        );
    }

}
      

      

const story = new Social_Story_Creation();
export default story;

  //Copied over from app.js, will have unused styles
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
        }
  
    });