import React, { useState } from 'react'
import { View,Text ,StyleSheet,TouchableOpacity, ScrollView} from 'react-native'
const Dropdown = (data) => {
    const fruits=['apple','mango','grape','apple','mango','grape','apple','mango','grape','apple','mango','grape']
    const[showitem,setShowitem]=useState(false)
  return (
    <View>
        <Text>
            Dropdown
        </Text>
        <TouchableOpacity style={styles.container} onPress={()=>setShowitem(!showitem)}>
            <Text>choose an option</Text>
        </TouchableOpacity>
        {showitem &&(<View>
            {fruits.map((Item)=>{
        return ( 
        <Text style={styles.options}>
            {Item}
            </Text> )
            })}</View>)}
    </View>
  )
}
export default Dropdown

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'grey',
    //   height:20,
    //   width:20,
      color:'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    options:{
            backgroundColor: 'green',
            height:20,
            width:400,
            color:'black',
            textAlign: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            background: "#ff4931",
    transition: "all 100ms ease",
    //transform: "scale(1.05)",
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)"
            
          
    }
})