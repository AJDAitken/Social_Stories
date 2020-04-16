import React, { Component, useState } from 'react';
import { StyleSheet, NavigationActions, Text, View, Button, SafeAreaView, TouchableOpacity, ScrollView, Image, FlatList, Dimensions} from 'react-native';
import SortableGrid from 'react-native-sortable-grid'
//For handling image manipulation in the story grid
import 'react-native-gesture-handler';

import { render } from 'react-dom';
import ViewShot from "react-native-view-shot";
//For nav within story_creation, new tab for each screen of the story
//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import archive from './Archive';

//20 images imported - School, 20 images imported - Medical
  const storyImages = [
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
    require('./assets/Images/Design/computer_mouse.png'),
    require('./assets/Images/Design/cube.png'),
    require('./assets/Images/Design/desk.png'),
    require('./assets/Images/Design/graphic_design.png'),
    require('./assets/Images/Design/graphic_tool_1.png'),
    require('./assets/Images/Design/graphic_tool.png'),
    require('./assets/Images/Design/idea.png'),
    require('./assets/Images/Design/laptop.png'),
    require('./assets/Images/Design/layers.png'),
    require('./assets/Images/Design/list.png'),
    require('./assets/Images/Design/paint_brush.png'),
    require('./assets/Images/Design/pantone.png'),
    require('./assets/Images/Design/pencil_case.png'),
    require('./assets/Images/Design/photo_camera.png'),
    require('./assets/Images/Design/picture.png'),
    require('./assets/Images/Design/rgb.png'),
    require('./assets/Images/Design/smartphone.png'),
    require('./assets/Images/Design/tablet.png'),
    require('./assets/Images/Design/vector_1.png'),
    require('./assets/Images/Design/vector.png'),
  ]
 
  
const archiveArray = [];

const Story_Creation = ()=>{
  

  //KEEP MINAMISED - will refactor later if time, need hard code for testing 
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

    //Set up references and states (done once per grid)
  const [currentGrid, setGrid]= useState(initialGrid);
  const scroll = React.createRef();
  const storyCapture = React.createRef();

  saveToArchive = (storyCapture) =>{
    console.log("Got to Save to Archive (in story_creation)", storyCapture);
    storyCapture.onCapture=(uri)=>{
      archiveArray.push(imageSource = uri);
      archive.render(archiveArray);
      console.log(uri);
      
    }
    
    //console.log(archiveArray);

    

  } 

    addImage = (src,index, theGrid) =>{

      console.log("GOT TO ADDIMAGE METHOD");
      //console.log(src,index, theGrid);

      const tempGrid = [...theGrid];
      let i = tempGrid.findIndex(tempGrid => tempGrid.imageSource === 'blank');
      console.log("First empty space in the grid: ", i);
      tempGrid[i] = {...tempGrid[i], imageSource: (storyImages[src, index])};
      //console.log(tempGrid);
      
      setGrid(tempGrid);
      
      
  }

  gridDelete = (index, theGrid) => {
    
    console.log("GOT TO gridDelete METHOD");
      //console.log(src,index, theGrid);

      const tempGrid = [...theGrid];

      tempGrid[index] = {...tempGrid[index], imageSource: 'blank'};
      //console.log(tempGrid);
      
      setGrid(tempGrid);
  }
  
  goToSchool = () => {
    console.log("Got to goToSchool (scrollTo method)");
    scroll.current.scrollTo({x:0, y:0, animated: true });
  }

  goToMedical = () => {
    console.log("Got to goToMedical (scrollTo method)");
    scroll.current.scrollTo({x:3000, y:0, animated: true });
  }

  goToDesign = () => {
    console.log("Got to goToDesign (scrollTo method)");
    scroll.current.scrollTo({x:6000, y:0, animated: true });
  }

  

  return (
    <SafeAreaView style={{ flex: 1, margin: (10,10,10,10)}}> 

    <View style = {styles.topRightButton}>
      <Button onPress={saveToArchive.bind(storyCapture)} style = {styles.topRightButton} title="Save To Archive" />
    </View>
    <ViewShot ref = {storyCapture} options={{ format: "jpg", quality: 0.9, result: "data-uri" }}>
        <View collapsable={false} >
        <SortableGrid 
            style= {styles.gridContainer}
            blockTransitionDuration = { 400 }
            activeBlockCenteringDuration = { 200 }
            itemsPerRow = { 5 }
            >
              {
                currentGrid.map( (picture_name, index) =>

                  <View key={index}  onTap = {this.gridDelete.bind(this, index, currentGrid)}> 
                    
                      <Image source={picture_name.imageSource} style={{width: 150, height: 150}}/>
                  </View>
                  )
              }
          </SortableGrid> 
          </View>       
      </ViewShot>
      <View style={styles.bottomView}>
          <View style = {styles.scrollButtonFlex}>
            <Button onPress={goToSchool}style = {styles.scrollButton} title="School" />
            <Button onPress={goToMedical}style = {styles.scrollButton} title="Medical" />
            <Button onPress={goToDesign} style = {styles.scrollButton} title="Design" />
          </View>
          <View style = {{position: 'absolute', bottom: 0 }}>
            <ScrollView style={styles.scrollViewStyle} ref={scroll} horizontal={true}> 

            
            {
              //this.addImage.bind(this, src, index)
              //prints out the storyImages array, may chnage to drag and drop system
                storyImages.map( (src, index) =>
                    
                  <View key={index} > 
                    <TouchableOpacity onPress ={this.addImage.bind(this, src, index, currentGrid)} style={styles.imageStyle} >
                      
                      <Image source={src} style={styles.imageStyle}/>
                      
                    </TouchableOpacity>
                  </View>
                  )
              } 
                      
            </ScrollView>
            </View>
      </View>   
    </SafeAreaView>
    
  );
  
  
        
}


function Screen_1() {
  return (
    Story_Creation()
  );
}
function Screen_2() {
  return (
    Story_Creation()
  );
}
function Screen_3() {
  return (
    Story_Creation()
  );
}
function Screen_4() {
  return (
    Story_Creation()
  );
}
function Screen_5() {
  return (
    Story_Creation()
  );
}
function Screen_6() {
  return (
    Story_Creation()
  );
}

const Tab = createBottomTabNavigator();

class Social_Story_Creation extends Component{
    constructor(props){
        super(props);
        
        
        };
        
        
    //Renders the bottom tab bar, which creates its own story grid for each tab to form a 'full story'
      render(){
        
        return(
          //<NavigationContainer independent={false}>
          
           <Tab.Navigator>
             
              <Tab.Screen name="Screen One" component={Screen_1} />
              <Tab.Screen name="Screen Two" component={Screen_2} />
              <Tab.Screen name="Screen Three" component={Screen_3} />
              <Tab.Screen name="Screen Four" component={Screen_4} />
              <Tab.Screen name="Screen Five" component={Screen_5} />
              <Tab.Screen name="Screen Six" component={Screen_6} />
           </Tab.Navigator>
           
          //</NavigationContainer>
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

    