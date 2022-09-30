import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import viewnotes  from '../viewnotes';
import addnotes from '../addnotes';
import newnotes from '../newnotes';
const StackNavigator=createStackNavigator ({
     viewnotes:{
        screen:viewnotes
     }  ,
     addnotes:{
        screen:addnotes
     }  ,
     newnotes:{
        screen:newnotes
     } 
},
// {
//     initialRouteName:'viewnotes'
//  }
 )
 export default createAppContainer(StackNavigator)