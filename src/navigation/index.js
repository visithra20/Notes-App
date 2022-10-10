import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import viewnotes  from '../Screens/viewnotes';
import addnotes from '../Screens/addnotes';
import dropdown from '../Screens/dropdown';

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