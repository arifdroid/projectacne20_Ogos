/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import TestComponent from './components/Test'; 

import CameraTest from './components/CameraTest'; 

import {createStackNavigator,createAppContainer} from 'react-navigation';

import ScreenCamera from './components/ScreenCamera';

import Skrinfirestore from './components/ScreenFireStore';

import React, {Fragment, PureComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button, PermissionsAndroid,
  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// setting up navigator 
//  --------------------------

const AppNavigator = createStackNavigator(
  {
    Test: TestComponent,
     //notice, we need to use same, since its not gohome, its home only , defined as const
    ScreenCamera: ScreenCamera,
    ScreenFireStore: Skrinfirestore,

  },{

    initialRouteName: "Test"

  });

const AppContainer = createAppContainer(AppNavigator);


// ------------------------


// ------------------------> Home

const Home =()=>{

  return(

    <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
    
    <Button title='button test'></Button>
    
    </View>

  )
}



// ------------------------

class App extends React.PureComponent{

  constructor(){
    super();
  
    this.state={

      ready:false,

      
    }

    this.requestPermission();
  }

  requestPermission = async()=>{

    try{

      const granted = await PermissionsAndroid.request(

        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{

          title:'Asking permission',
          message:'My app need access to storage ',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK', 
        },

      );

      //return granted;

       if(granted===PermissionsAndroid.RESULTS.GRANTED){

        this.setState({
            ready:true,
        });
       } 


      }catch(error) {
        return null;
      }


  };


  render(){

  if(!this.state.ready){

    return(

      <View style={{alignContent:'center', justifyContent:'center', flex:1}}>
      
        <Text style={{alignSelf:'center'}}> not ready </Text>
      </View>

    )

  }  
  return(


    
    
    <AppContainer/>

    

  )
  }

};


const styles = StyleSheet.create({



});

export default App;
