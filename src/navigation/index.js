import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import viewnotes  from '../SCREENS/viewnotes';
import addnotes from '../SCREENS/addnotes';
import dropdown from '../SCREENS/dropdown';

const StackNavigator=createStackNavigator ({
     viewnotes:{
        screen:viewnotes
     }  ,
     addnotes:{
        screen:addnotes
     }  ,
     dropdown:{
      screen:dropdown
     }
    
},
// {
//     initialRouteName:'viewnotes'
//  }
 )
 export default createAppContainer(StackNavigator)