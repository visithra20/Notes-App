import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {Text} from 'react-native-paper'
export default function addnotes() {
  // const[notes,setNotes]=useState()
  // const[clonenotes,setClonenotes]=useState([])
  // const handleClickaddnotes=()=>{
  //   setClonenotes([...clonenotes,notes])
  // }
  return (
    <SafeAreaView style={styles.container}>
    <View >

      <Text>notes model</Text>
   
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    backgroundColor: '#ECF8F0',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  },
 );
