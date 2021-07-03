import * as React from 'react';
import { Stylesheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';


export default class App extends React.Component {
    render(){
      return(
        <AppContainer />
      );
    }
  }


const TabNavigator = createBottomTabNavigator({
    Write: {screen: WriteStoryScreen},
    Read: {ReadStoryScreen}
},
{
defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        console.log(routeName)
        if(routeName === "Write"){
            return(
                <Image
                source={require("./images/write.png")}
                style={{width:40, height:40}}
                />
            )
        }
        else if(routeName === Read){
            return(
                <Image
                source={require("./images/read.png")}
                style={{width:40, height:40}}
                />
            )
        }
    }
})

}
);

const AppContainer = createAppContainer(TabNavigator);