import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import viewnotes  from '../viewnotes';
import addnotes from '../addnotes';

const StackNavigator=createStackNavigator ({
     viewnotes:{
        screen:viewnotes
     }  ,
     addnotes:{
        screen:addnotes
     }  
},
// {
//     initialRouteName:'viewnotes'
//  }
 )
 export default createAppContainer(StackNavigator)