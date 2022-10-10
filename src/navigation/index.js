import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import viewnotes  from '../screens/viewnotes';
import addnotes from '../screens/addnotes';
import dropdown from '../screens/dropdown';

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