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
      How to make a story:
    </Text>
    
  </View>
  );
}

function How_To_Story(){
  return(
    <ScrollView>
  <View style={styles.SS_Body}>
    <Text style={styles.SS_Heading}>
      What is a Social Story?
    </Text>
    <Text style={styles.SS_Text}>
    A Social Story accurately describes a context, skill, achievement, or concept according to 10 defining criteria. These
    criteria guide Story research, development, and implementation to ensure an overall patient and supportive quality,
    and a format, ‘voice’, content, and learning experience that is descriptive, meaningful, respectful, and physically,
    socially, and emotionally safe for the Story audience (a child, adolescent, or adult).
    </Text>
    <Text>
      
    </Text>
    <Text style={styles.SS_Heading}>
    Criterion 1: The Social Story Goal
    </Text>
    <Text style={styles.SS_Text}>
    Authors follow a defined process to share accurate information using a content, format, and voice that is descriptive,
    meaningful, and physically, socially, and emotionally safe for the Audience.
    </Text>
    <Text>
      
    </Text>
    <Text style={styles.SS_Heading}>
    Criterion 2: Two-Step Discovery 
    </Text>
    <Text style={styles.SS_Text}>
    Keeping the Goal in mind, authors gather relevant information to 1) improve their understanding of the Audience in
    relation to a situation, skill, or concept and/or 2) identify the specific topic(s) and the most critical information (focus)
    of each Story. At least 50% of all Social Stories applaud achievements. 
    </Text>
    <Text>
    
    </Text>
    <Text style={styles.SS_Heading}>
    Criterion 3: Three-Parts and a Title
    </Text>
    <Text style={styles.SS_Text}>
    A Social Story/Article has a title and introduction that clearly identifies the topic, a body that adds detail, and a
    conclusion that reinforces and summarizes the information. 
    </Text>
    <Text>
    
    </Text>
    <Text style={styles.SS_Heading}>
    Criterion 4: Four·mat Makes it Mine!
    </Text>
    <Text style={styles.SS_Text}>
    The Social Story™ format is tailored to the individual abilities, attention span, learning style and - whenever possible
    – talents and/or interests of its Audience. 
    </Text>
    <Text>
    
    </Text>
    <Text style={styles.SS_Heading}>
    Criterion 5: Five Factors Define Voice and Vocabulary
    </Text>
    <Text style={styles.SS_Text}>
    A Social Story has a patient and supportive “voice” and vocabulary that is defined by five factors:
    </Text>
    <Text style={styles.SS_Text}>
    1) Exclusive use of first- and/or third-person perspective statements (no second person statements);
    </Text>
    <Text style={styles.SS_Text}>
    2) Past, present, or future tense;
    </Text>
    <Text style={styles.SS_Text}>
    3) Positive and patient tone;
    </Text>
    <Text style={styles.SS_Text}>
    4) Literally accurate; and
    </Text>
    <Text style={styles.SS_Text}>
    5) Accurate meaning.
    </Text>
    <Text>
    
    </Text>
    <Text style={styles.SS_Heading}>
    Criterion 6: Six Questions Guide Story Development
    </Text>
    <Text style={styles.SS_Text}>
    A Social Story™ answers relevant ’WH’ questions that describe context, including place (WHERE), time-related
    information (WHEN), relevant people (WHO), important cues (WHAT), basic activities, behaviors, or statements
    (HOW), and the reasons or rationale behind them (WHY).
    </Text>
    <Text>
    
    </Text>
    <Text style={styles.SS_Heading}>
    Criterion 7: Seven is About Sentences
    </Text>
    <Text style={styles.SS_Text}>
    A Social Story is comprised of Descriptive Sentences and may also have one or more Coaching Sentence(s).
    </Text>
    <Text style={styles.SS_Text}>
    Descriptive Sentences accurately describe relevant aspects of context, including external and/or
    internal factors while adhering to all applicable Social Story Criteria. They are free of assumption or bias, judgment,
    devaluation, or unidentified opinion
    </Text>
    <Text style={styles.SS_Text}>
    Coaching Sentences gently guide behavior via descriptions of effective Team or Audience
    responses, or structured Audience Self-Coaching, adhering to all other applicable Social Story Criteria. 
    </Text>
    <Text>
    
    </Text>
    <Text style={styles.SS_Heading}>
    #8 A Gr·eight! Formula
    </Text>
    <Text style={styles.SS_Text}>
    The Social Story™ Formula ensures that every Social Story describes more than directs.
    </Text>
    <Text style={styles.SS_Text}>
    (Total # of Descriptive Sentences / Total # of Coaching Sentences) ≥ 2
    </Text>
    <Text style={styles.SS_Text}>
    *If there are no (0) Sentences that Coach, use 1 in the denominator.
    </Text>
    <Text>
    
    </Text>
    <Text style={styles.SS_Heading}>
    Criterion 9: Nine to Refine
    </Text>
    <Text style={styles.SS_Text}>
    The first draft of a story is rarely the final draft. A story draft is always reviewed by relevant caregivers and revised if
    necessary to ensure that it meets all defining Social Story criteria.
    </Text>
    <Text>
    
    </Text>
    <Text style={styles.SS_Heading} >
    Criterion 10: Ten Guides to Editing and Implementation
    </Text>
    <Text style={styles.SS_Text}>
    The Ten Guides to Implementation ensure that the philosophy and Criteria that guide Story/Article development are
    consistent with how it is introduced and reviewed with the Audience. They are:
    </Text>
    <Text style={styles.SS_Text}>
    1) Plan for Comprehension
    </Text>
    <Text style={styles.SS_Text}>
    2) Plan Story Support
    </Text>
    <Text style={styles.SS_Text}>
    3) Plan Story Review
    </Text>
    <Text style={styles.SS_Text}>
    4) Plan a Positive Introduction
    </Text>
    <Text style={styles.SS_Text}>
    5) Monitor
    </Text>
    <Text style={styles.SS_Text}>
    6) Organize the Stories
    </Text>
    <Text style={styles.SS_Text}>
    7) Mix and Match to Build Concepts
    </Text>
    <Text style={styles.SS_Text}>
    8) Story Re-runs and Sequels to Tie Past, Present, and Future
    </Text>
    <Text style={styles.SS_Text}>
    9) Recycle Instruction into Applause
    </Text>
    <Text style={styles.SS_Text}>
    10) Stay Current on Social Story Research and Updates
    </Text>
  </View>
  </ScrollView>
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
        justifyContent: 'center',
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
      },
      SS_Heading:{
        fontSize: 28,
      },
      SS_Text:{
        fontSize : 20,
      },
      SS_Body:{
        flex: 1, 
        alignItems: 'flex-start', 
        justifyContent: 'center',
         margin: 20,
      },

  });

  
//export default Social_Stories;
 
