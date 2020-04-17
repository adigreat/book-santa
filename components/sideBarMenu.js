import React,{Component} from 'react';
import {View, Text,TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-native-drawer'
import firebase from 'firebase';
export default class SideBarMenu extends Component{
    render(){
        return(
        <View style={{flex:1}}>
            <DrawerItems {...this.props}/>
            <View style={{flex:1,justifyContent:'flex-end',paddingBottom:30}}>
<TouchableOpacity style={{justifyContent:'center',padding:10,height:30,width:'100%'}}
    onPress={()=>{
        this.props.navigation.navigate('WelcomeScreen')
        firebase.auth().signOut()
    }}>
    <Text>
   log out
</Text>
    
</TouchableOpacity>
            </View>
           
        </View>
        )
    }
}
