import React, { useState } from 'react';
//import SortableGrid from 'react-native-sortable-grid';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, ScrollView, Image, FlatList, PanResponder, Animated} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { render } from 'react-dom';
import Carousel from 'react-native-snap-carousel';



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

//KEEP MINAMISED - will refactor later if time, dont judge my hard coded rubbish
const initialGrid = [
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
    title: 'test3',
    imageSource: '',
  },
  {
    id: '3',
    title: 'test4',
    imageSource: '',
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
];

function Item({ imageSource }) {
  return(
    <View style={styles.row}>
      <Image source={imageSource} style={styles.imageStyle}  />
    </View>
  );

}

function addImage(){
  
}

function Story_Creation() {
  const [currentImage, setImage] = useState(0);
  //let newImage;
  //var imageArray = [newImage, basketball, book, bookshelf, desktop, 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'];

  return (
    
    <SafeAreaView style={{ flex: 1, margin: (10,10,10,10)}}> 
      <FlatList
      data={initialGrid}
      //extraData={}
      renderItem={({ item }) => <Item imageSource={item.imageSource}/>}
      keyExtractor={item => item.id}
      numColumns={5}
      columnWrapperStyle={styles.row}
      />

      <View style={styles.bottomView}>
        <ScrollView style={styles.scrollViewStyle} horizontal={true}> 
      
        {
          //prints out the schoolImage array, may chnage to drag and drop system
            schoolImages.map( (src, index) =>

              <View key={index}> 
                <TouchableOpacity onPress={()=> addImage } style={styles.imageStyle}>
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
  constructor(props){
    super(props);
    //panResponder - will do tuesday
    //this.state = {
    //  pan: new Animated.ValueXY()
    //};
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


//considered good practice to source images before use, not during
const backpack = require('./assets/Images/School/backpack.png');
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

  
//export default Social_Stories;
 
