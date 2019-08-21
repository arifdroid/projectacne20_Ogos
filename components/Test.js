import React from 'react'
import { View, Text, Button } from 'react-native'

const Test = (props) => {

    _goToCamera = ()=>{


    }


    return (
        <View style={{justifyContent:'center', flex:1, alignItems:'center',}}>
            <Text> Test component s</Text>
            <View style={{margin:10}}></View>
            <View style={{flexDirection:'row', backgroundColor:'white', width:'85%'}}>
                <View style={{flex:1, marginHorizontal:10}}>
                {/* <Button title='Camera' onPress={props.navigation.navigate('ScreenCamera')}></Button>*/}
                <Button title='Camera' onPress={()=>props.navigation.navigate('ScreenCamera')}></Button>
                </View>   
                <View style={{flex:1,  marginHorizontal:10,}}>
                <Button title='Firebase' onPress={()=>props.navigation.navigate('ScreenFireStore')}></Button>
                </View>   
            </View>
        </View>
    )
}

export default Test
