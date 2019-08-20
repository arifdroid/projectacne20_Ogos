/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import CameraTest from './components/CameraTest'; 

import React, {Fragment} from 'react';
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

class App extends React.Component{

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

  // if(requestPermission()===granted){  
    
  // return (



  //   <View style={{flex:1}}>
    
  //   <CameraTest/>

  //   </View>
  // );

  // };

  render(){

  if(!this.state.ready){

    return(

      <View style={{alignContent:'center', justifyContent:'center', flex:1}}>
      
        <Text style={{alignSelf:'center'}}> not ready </Text>
      </View>

    )

  }  
  return(


    <View style={{flex:1}}>
    
    <CameraTest/>

    </View>

  )
  }

};


const styles = StyleSheet.create({



});

export default App;
