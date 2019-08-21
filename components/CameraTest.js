import React, { Component, PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, CameraRoll  } from 'react-native'
import {RNCamera} from 'react-native-camera';

import {dirPictures, RNFS} from './DirStorage';

//import console = require('console');
//import console = require('console');
//https://medium.com/@masochist.aman/capturing-images-with-react-native-203e24f93eb9



const moveAttachment = async(filePath,newFilepath)=>{

    return new Promise((resolve,reject)=>{

        RNFS.mkdir(dirPictures)
            .then(()=>{

                RNFS.moveFile(filePath,newFilepath)
                    .then(()=>{

                        resolve(true);


                    })
                    .catch(error=>{


                        reject(error)
                    });


            })
            .catch(err=>{


                reject(err);
            })




    })


};

//////////// move 

export default class CameraTest extends PureComponent{

    _saveImage=async( filePath)=>{

      try{
        
      // set new image name and filepath
      const newImageName = `${moment().format('DDMMYY_HHmmSSS')}.jpg`;
      const newFilepath = `${dirPictures}/${newImageName}`;
      console.log('_saveImage > filepath is => '+ filePath);
      console.log('_saveImage > filepath  STRING is => '+ JSON.stringify(filePath));  
      // move and save image to new filepath
      const imageMoved = await moveAttachment(filePath, newFilepath); //this is where come from 

      }catch(error){

        console.log('_saveImage > error is => '+ filePath);
            
      }

    };

    CameraRo


    _fungsiGambar=async()=>{

        if(this.camera){
        //await alert('kamera');
            
             const options = {quality:0.5, base64:true};
            // await this.camera.takePictureAsync(options).then( data=>this._saveImage(data.path)).catch(err=>console.log('error boy'));

            const data = await this.camera.takePictureAsync(options);
            //this.camera.    

//            CameraRoll.saveToCameraRoll(data.uri, 'photo');
            
            console.log('data is => '+ JSON.stringify(data));

            CameraRoll.saveToCameraRoll(data.uri,'photo');   

            //this.camera.refs

            //this._saveImage(data.path); 

            // this.camera.capture()
            // .then(data=>this._savethemimage(data.path))
        
            //console.log('data is => '+ data);
        

        };

    };


    render() {
        return (
            
                <View style={{flex:1}}>

                <View style={{flex:1,  backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
                <RNCamera
                   
                    ref={ ref =>{this.camera=ref;}}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.front}
                  
                />
                
                </View>
                <View style={{flex:0, flexDirection:'row', justifyContent:'center', backgroundColor:'black'}}>
                    <TouchableOpacity
                    style={styles.capture}
                    onPress={this._fungsiGambar}   
                    >
                    <Text>CAPTURE</Text>
                    </TouchableOpacity>
                </View>
                
                </View>
                
            
        )
    }
}

const styles = StyleSheet.create({

    centerme:{

        alignSelf:'center',
        backgroundColor:'green',
     

    },

    container: {
        flex: 1,
        flexDirection: 'column',
     
      },
      preview: {
        flex: 1,
        
        alignItems: 'center',
      }, 
      
     capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },


});
