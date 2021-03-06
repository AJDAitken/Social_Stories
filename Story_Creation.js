import React, { Component, useState, useRef} from 'react';
import { StyleSheet, TextInput, PanResponder, Animated, Text, View, Button, SafeAreaView, TouchableOpacity, ScrollView, Image, FlatList, Dimensions} from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";
// uninstal if can change sortable grid to panresponder flatlist
//import SortableGrid from 'react-native-sortable-grid'
//For handling image manipulation in the story grid
import 'react-native-gesture-handler';
import { render } from 'react-dom';
import { captureScreen }from "react-native-view-shot";
//For nav within story_creation, new tab for each screen of the story
//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Archive has been removed in the current build as it is buggy
import archive from './Archive';
//import RNFetchBlob from 'react-native-fetch-blob'

//20 images imported - School, 20 images imported - Medical, 30 images imported - Children, 30 images imported - Emotions, 
//20 images imported - Arrows, 20 images imported - equipment, 40 images imported - AltMedical, 25 images imported - AltSchool
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
    require('./assets/Images/Children/boy-1.png'),
    require('./assets/Images/Children/boy-2.png'),
    require('./assets/Images/Children/boy-3.png'),
    require('./assets/Images/Children/boy-4.png'),
    require('./assets/Images/Children/boy-5.png'),
    require('./assets/Images/Children/boy-7.png'),
    require('./assets/Images/Children/boy-8.png'),
    require('./assets/Images/Children/boy-10.png'),
    require('./assets/Images/Children/boy-12.png'),
    require('./assets/Images/Children/boy-13.png'),
    require('./assets/Images/Children/boy-14.png'),
    require('./assets/Images/Children/boy-15.png'),
    require('./assets/Images/Children/boy-16.png'),
    require('./assets/Images/Children/boy.png'),
    require('./assets/Images/Children/girl.png'),
    require('./assets/Images/Children/girl-1.png'),
    require('./assets/Images/Children/girl-2.png'),
    require('./assets/Images/Children/girl-3.png'),
    require('./assets/Images/Children/girl-4.png'),
    require('./assets/Images/Children/girl-5.png'),
    require('./assets/Images/Children/girl-6.png'),
    require('./assets/Images/Children/girl-7.png'),
    require('./assets/Images/Children/girl-9.png'),
    require('./assets/Images/Children/girl-10.png'),
    require('./assets/Images/Children/girl-11.png'),
    require('./assets/Images/Children/girl-12.png'),
    require('./assets/Images/Children/girl-13.png'),
    require('./assets/Images/Children/girl-14.png'),
    require('./assets/Images/Children/girl-15.png'),
    require('./assets/Images/Children/girl-16.png'),
    require('./assets/Images/Emotions/angry-1.png'),
    require('./assets/Images/Emotions/angry.png'),
    require('./assets/Images/Emotions/bored-1.png'),
    require('./assets/Images/Emotions/bored.png'),
    require('./assets/Images/Emotions/confused.png'),
    require('./assets/Images/Emotions/crying-1.png'),
    require('./assets/Images/Emotions/embarrassed.png'),
    require('./assets/Images/Emotions/emoticons.png'),
    require('./assets/Images/Emotions/happy-1.png'),
    require('./assets/Images/Emotions/happy-2.png'),
    require('./assets/Images/Emotions/happy-3.png'),
    require('./assets/Images/Emotions/happy-4.png'),
    require('./assets/Images/Emotions/happy.png'),
    require('./assets/Images/Emotions/ill.png'),
    require('./assets/Images/Emotions/in-love.png'),
    require('./assets/Images/Emotions/kissing.png'),
    require('./assets/Images/Emotions/mad.png'),
    require('./assets/Images/Emotions/nerd.png'),
    require('./assets/Images/Emotions/quiet.png'),
    require('./assets/Images/Emotions/sad.png'),
    require('./assets/Images/Emotions/secret.png'),
    require('./assets/Images/Emotions/smart.png'),
    require('./assets/Images/Emotions/smile.png'),
    require('./assets/Images/Emotions/smiling.png'),
    require('./assets/Images/Emotions/surprised.png'),
    require('./assets/Images/Emotions/suspicious.png'),
    require('./assets/Images/Emotions/suspicious-1.png'),
    require('./assets/Images/Emotions/tongue-out-1.png'),
    require('./assets/Images/Emotions/unhappy.png'),
    require('./assets/Images/Emotions/wink.png'),
    require('./assets/Images/Arrows/3d-up-arrow-1.png'),
    require('./assets/Images/Arrows/back-drawn-arrow.png'),
    require('./assets/Images/Arrows/check-mark-arrow.png'),
    require('./assets/Images/Arrows/clockwise-drawn-arrow.png'),
    require('./assets/Images/Arrows/curved-downward-arrow.png'),
    require('./assets/Images/Arrows/curved-up-arrow-1.png'),
    require('./assets/Images/Arrows/downward-rotation.png'),
    require('./assets/Images/Arrows/loop-arrows-1.png'),
    require('./assets/Images/Arrows/looping-arrows.png'),
    require('./assets/Images/Arrows/right-arrow-2.png'),
    require('./assets/Images/Arrows/right-arrow-outline.png'),
    require('./assets/Images/Arrows/right-arrow.png'),
    require('./assets/Images/Arrows/right-drawn-arrow.png'),
    require('./assets/Images/Arrows/squiggly-arrow.png'),
    require('./assets/Images/Arrows/turn-right-arrow.png'),
    require('./assets/Images/Arrows/turn-right-arrow-1.png'),
    require('./assets/Images/Arrows/turn-up-arrow.png'),
    require('./assets/Images/Arrows/undulating-arrow.png'),
    require('./assets/Images/Arrows/up-arrow.png'),
    require('./assets/Images/Arrows/up-arrow-2.png'),
    require('./assets/Images/Uncoloured_Equipment/calculator.png'),
    require('./assets/Images/Uncoloured_Equipment/compass.png'),
    require('./assets/Images/Uncoloured_Equipment/computer.png'),
    require('./assets/Images/Uncoloured_Equipment/flask.png'),
    require('./assets/Images/Uncoloured_Equipment/laptop.png'),
    require('./assets/Images/Uncoloured_Equipment/microscope.png'),
    require('./assets/Images/Uncoloured_Equipment/mouse.png'),
    require('./assets/Images/Uncoloured_Equipment/notebook-1.png'),
    require('./assets/Images/Uncoloured_Equipment/notebook-and-pencil.png'),
    require('./assets/Images/Uncoloured_Equipment/notebook.png'),
    require('./assets/Images/Uncoloured_Equipment/paint-brush.png'),
    require('./assets/Images/Uncoloured_Equipment/paint-palette.png'),
    require('./assets/Images/Uncoloured_Equipment/pen-1.png'),
    require('./assets/Images/Uncoloured_Equipment/pencil-1.png'),
    require('./assets/Images/Uncoloured_Equipment/protractor.png'),
    require('./assets/Images/Uncoloured_Equipment/right-triangle.png'),
    require('./assets/Images/Uncoloured_Equipment/ruler.png'),
    require('./assets/Images/Uncoloured_Equipment/scissors.png'),
    require('./assets/Images/Uncoloured_Equipment/sharpener.png'),
    require('./assets/Images/Uncoloured_Equipment/writing-tools-1.png'),
    require('./assets/Images/Uncoloured_Medical/back-side-of-legs.png'),
    require('./assets/Images/Uncoloured_Medical/blood-transfusion.png'),
    require('./assets/Images/Uncoloured_Medical/broken-bone.png'),
    require('./assets/Images/Uncoloured_Medical/digestive-system.png'),
    require('./assets/Images/Uncoloured_Medical/female-hair.png'),
    require('./assets/Images/Uncoloured_Medical/female-pubis.png'),
    require('./assets/Images/Uncoloured_Medical/female-trunk.png'),
    require('./assets/Images/Uncoloured_Medical/foot-bones.png'),
    require('./assets/Images/Uncoloured_Medical/hand-bones.png'),
    require('./assets/Images/Uncoloured_Medical/human-abdomen.png'),
    require('./assets/Images/Uncoloured_Medical/human-ankle.png'),
    require('./assets/Images/Uncoloured_Medical/human-body-side.png'),
    require('./assets/Images/Uncoloured_Medical/human-bone.png'),
    require('./assets/Images/Uncoloured_Medical/human-buttocks.png'),
    require('./assets/Images/Uncoloured_Medical/human-ear.png'),
    require('./assets/Images/Uncoloured_Medical/human-eye.png'),
    require('./assets/Images/Uncoloured_Medical/human-eyebrow.png'),
    require('./assets/Images/Uncoloured_Medical/human-finger.png'),
    require('./assets/Images/Uncoloured_Medical/human-lips.png'),
    require('./assets/Images/Uncoloured_Medical/human-neck.png'),
    require('./assets/Images/Uncoloured_Medical/human-skull.png'),
    require('./assets/Images/Uncoloured_Medical/human-teeth.png'),
    require('./assets/Images/Uncoloured_Medical/human-toe.png'),
    require('./assets/Images/Uncoloured_Medical/large-intestine.png'),
    require('./assets/Images/Uncoloured_Medical/small-intestine.png'),
    require('./assets/Images/Uncoloured_Medical/long-nail.png'),
    require('./assets/Images/Uncoloured_Medical/men-back.png'),
    require('./assets/Images/Uncoloured_Medical/men-chest.png'),
    require('./assets/Images/Uncoloured_Medical/men-elbow.png'),
    require('./assets/Images/Uncoloured_Medical/men-hair.png'),
    require('./assets/Images/Uncoloured_Medical/men-hand.png'),
    require('./assets/Images/Uncoloured_Medical/men-knee.png'),
    require('./assets/Images/Uncoloured_Medical/men-leg.png'),
    require('./assets/Images/Uncoloured_Medical/men-shoulder.png'),
    require('./assets/Images/Uncoloured_Medical/mouth-open.png'),
    require('./assets/Images/Uncoloured_Medical/nose-side-view.png'),
    require('./assets/Images/Uncoloured_Medical/respiratory-system.png'),
    require('./assets/Images/Uncoloured_Medical/tongue-and-mouth.png'),
    require('./assets/Images/Uncoloured_Medical/tonsil.png'),
    require('./assets/Images/Uncoloured_Medical/tooth-and-gums.png'),
    require('./assets/Images/Uncoloured_School/question.png'),
    require('./assets/Images/Uncoloured_School/backpack.png'),
    require('./assets/Images/Uncoloured_School/blackboard-1.png'),
    require('./assets/Images/Uncoloured_School/blackboard.png'),
    require('./assets/Images/Uncoloured_School/books.png'),
    require('./assets/Images/Uncoloured_School/book-2.png'),
    require('./assets/Images/Uncoloured_School/bus.png'),
    require('./assets/Images/Uncoloured_School/diploma.png'),
    require('./assets/Images/Uncoloured_School/diploma-1.png'),
    require('./assets/Images/Uncoloured_School/medal.png'),
    require('./assets/Images/Uncoloured_School/trophey.png'),
    require('./assets/Images/Uncoloured_School/basketball.png'),
    require('./assets/Images/Uncoloured_School/football.png'),
    require('./assets/Images/Uncoloured_School/rugby-ball.png'), 
    require('./assets/Images/Uncoloured_School/lamp.png'),
    require('./assets/Images/Uncoloured_School/letter-a.png'),
    require('./assets/Images/Uncoloured_School/letter-b.png'),
    require('./assets/Images/Uncoloured_School/letter-c.png'),
    require('./assets/Images/Uncoloured_School/number-1.png'),
    require('./assets/Images/Uncoloured_School/number-2.png'),
    require('./assets/Images/Uncoloured_School/number-3.png'),
    require('./assets/Images/Uncoloured_School/light-bulb.png'),
    require('./assets/Images/Uncoloured_School/magnifying-glass.png'),  
    require('./assets/Images/Uncoloured_School/musical-note.png'),
    require('./assets/Images/Uncoloured_School/musical-notes.png'),
    
    
    
    
  ]
  
//const archiveArray = [];



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
      
    ];

    //Set up references and states (done once per grid)
  const [currentGrid, setGrid]= useState(initialGrid);
  const scroll = React.createRef();
  const storyCapture = React.createRef();
  const [currentTitleText, onChangeTitleText] = React.useState('Title');
  const [currentContextText, onChangeContextText] = React.useState('Add some context for your story!');

  saveToArchive = () =>{
    captureScreen({
      format: "jpg",
      quality: 0.9,
    }).then( uri=> {
        CameraRoll.saveToCameraRoll(uri);
        //.then(Alert.alert('Success', 'Photo added to camera roll!')),
      //error => console.error("Screenshot failed", error)
      });
      
      //console.log("got to saveToArchive"); 
    

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

  gridDelete = () => {
    
    console.log("GOT TO gridDelete METHOD");
      //The code below is from a previous (working) attempt, left in incase I want to use the functionality else where later on
      //console.log(src,index, theGrid);

      //const tempGrid = [...theGrid];

      //tempGrid[index] = {...tempGrid[index], imageSource: 'blank'};
      //console.log(tempGrid);
      //Wipe grid instead of deleting specific items
      setGrid(initialGrid);
  }
  
  goToSchool = () => {
    console.log("Got to goToSchool (scrollTo method)");
    scroll.current.scrollTo({x:0, y:0, animated: true });
  }

  goToMedical = () => {
    console.log("Got to goToMedical (scrollTo method)");
    scroll.current.scrollTo({x:3000, y:0, animated: true });
  }

  goToChildren = () => {
    console.log("Got to goToDesign (scrollTo method)");
    scroll.current.scrollTo({x:6000, y:0, animated: true });
  }
  goToEmontions = () => {
    console.log("Got to goToEmotions (scrollTo method)");
    scroll.current.scrollTo({x:10500, y:0, animated: true });
  }
  goToArrows = () => {
    console.log("Got to goToArrows (scrollTo method)");
    scroll.current.scrollTo({x:15000, y:0, animated: true });
  }
  goToEquipment = () => {
    console.log("Got to goToEquipment (scrollTo method)");
    scroll.current.scrollTo({x:18000, y:0, animated: true });
  }
  goToAltMedical = () => {
    console.log("Got to goToAltMedical (scrollTo method)");
    scroll.current.scrollTo({x:21000, y:0, animated: true });
  }
  goToAltSchool = () => {
    console.log("Got to goToAltSchool (scrollTo method)");
    scroll.current.scrollTo({x:27000, y:0, animated: true });
  }

  return (
    <SafeAreaView style={{ flex: 1, margin: (10,10,10,10)}}> 
    
  
    <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: (10,10,10,10),}}>
        <View style = {{width: 125, height:100, }}>
          <Button onPress={this.gridDelete.bind(this)} 
          title="Clear Screen" 
          color="#0000e6"
          fontSize="24"
          />
        </View>
        <View>
          <TextInput style={styles.titleBox} 
          onChangeText={text => onChangeTitleText(text)}
          value={currentTitleText}
          />
        </View>

        <View style = {{width: 125, height:100 }}>
          <Button onPress={saveToArchive.bind()} 
          title="Save To Archive" 
          color="#0000e6"
          />
            
            
          
        </View>
        
    </View>
    
        
        <Animated.View>
        <FlatList
            data={currentGrid}
            style={styles.gridContainer}
            //extraData={}
            renderItem={({ item }) =><View ><Item imageSource={item.imageSource}/></View> }
            keyExtractor={item => item.id}
            numColumns={5}
            scrollEnabled={false}
            columnWrapperStyle={styles.row}
            
            />
         </Animated.View>           
         
      <View style={{paddingTop: 10}}>
          <TextInput multiline style={styles.contextBox} 
          onChangeText={text => onChangeContextText(text)}
          value={currentContextText}
          />
      </View>

      
      <View style={{backgroundColor: '#C0C0C0', paddingTop:10}}>
          <View style = {styles.scrollButtonFlex}>
            <Button onPress={goToSchool}style = {styles.scrollButton} title="School" color="#0000e6"/>
            <Button onPress={goToMedical}style = {styles.scrollButton} title="Medical" color="#0000e6"/>
            <Button onPress={goToChildren} style = {styles.scrollButton} title="Children" color="#0000e6"/>
            <Button onPress={goToEmontions} style = {styles.scrollButton} title="Emotions" color="#0000e6"/>
            <Button onPress={goToArrows} style = {styles.scrollButton} title="Arrows" color="#0000e6"/>
            <Button onPress={goToEquipment} style = {styles.scrollButton} title="Equipment" color="#0000e6"/>
            <Button onPress={goToAltMedical} style = {styles.scrollButton} title="Alt Medical" color="#0000e6"/>
            <Button onPress={goToAltSchool} style = {styles.scrollButton} title="Alt School" color="#0000e6"/>
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

function Item({ imageSource}) {
  // The following code is partly taken from the react-native website for usage of panResponder
  // https://reactnative.dev/docs/panresponder
  const pan = useRef(new Animated.ValueXY()).current;
  let _value = {x:0,y:0};
  panListener = pan.addListener((value) => _value = value);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onStartShouldSetPanResponder: (e, gestureState) => false,
      //onMoveShouldSetPanResponder: () => true,
      
      onPanResponderGrant: (e, gestureState) => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
          
        ], 
        
      ),
      onPanResponderRelease: (e, gestureState) => {
        
        pan.flattenOffset({
         // x: pan.x._value + gestureState.dx,
          //y: pan.y._value + gestureState.dy
        });
       
      }
    })
  ).current;

  return( 
    <View style={styles.row,{zIndex: 100}} {...panResponder.panHandlers}>
      <TouchableOpacity style={{transform: [
        { translateX: pan.x }, 
        { translateY: pan.y }
        ]}} >
     <Image source={imageSource} style={styles.imageStyle}/>
     </TouchableOpacity>       
    </View>
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
          
           <Tab.Navigator style={styles.tabBar}>
             
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
          borderWidth:3,
          borderColor: '#d3d3d3',
          height: Platform.OS === 'ios' ? '45%' : '55%', 
          width: '100%',
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
          //backgroundColor: (255, 255, 255, 0.0),
          zIndex: 0,
          flex: 1,
          justifyContent: "space-around",
          //margin: 1,
          marginHorizontal: 1,
          marginVertical: 1,
        },
        scrollButtonFlex:{
          //flex:1,
          justifyContent: 'space-between',
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
        topButton:{
          
          width: 120,
          
          height: 75,
          //Buttons cannot handle the style prop, colour has to be added manually in the button 
          //color: '#fffdd0',
        },
        tabBar:{
          height: 100,
        },
        titleBox:{
          height: 65,
          //flex: 1,
          width: 400,
          textAlign:"center",
          fontSize: 42,
          borderWidth: 1,
          borderColor: '#d3d3d3',
          justifyContent: 'center'
        },
        topBar:{
          flexDirection: 'row', 
          justifyContent: 'space-around', 
          margin: (10,10,10,10),
        },
        contextBox:{
          height: 150 ,
          //flex: 1,
          width: '100%',
          textAlign:"center",
          borderWidth: 1,
          fontSize: 28,
          borderColor: '#d3d3d3',
          alignItems: 'center',
          
          margin: (10,0,10,0),
          //position: 'relative',
          
        }
  
    });

    