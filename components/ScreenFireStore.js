import React, { Component, PureComponent } from 'react'
import { Text, View,Button, FlatList, ScrollView, TextInput } from 'react-native'


export default class ScreenFireStore extends React.PureComponent {

    constructor(){
        super();

        this.state={

            inputTyped:'',
            inputArray:[],
        }

    }

    render() {
        return (
            <View style={{alignItems:'center', flex:1, backgroundColor:'yellow'}}>
                <Text style={{margin:10}}> ScreenFireStore </Text>
                <View style={{flexDirection:'row', width:'90%', backgroundColor:'black', marginBottom:30}}> 
                
                    <TextInput style={{backgroundColor:'#b8f7f7', flex:2, marginHorizontal:10, height:'80%', alignSelf:'center' }}
                    />
                    <View style={{flex:1, alignSelf:'center'}}>
                        <Button title='Add'></Button>
                    </View>
                </View>
                <ScrollView>
                
                <FlatList
                
                data={myArrayObject}
                renderItem={

                        ({item})=>{

                            return(

                                 <View style={{margin:3, justifyContent:'center'}}>

                                 <Text>{item.name}</Text>
                                 <Text>{item.age}</Text>

                                 </View>   

                            )
                        }

                }
                
                />                
                
                
                </ScrollView>

            </View>
        )
    }
}

const myArrayObject : ThisArrayObject =[
    {
        name:'arif',
        age:28,
    },{
        name:'ryn',
        age:20,
    },
    
    {
        name:'mak',
        age:68,
    },
    
    {
        name:'abah',
        age:72,
    }
];
