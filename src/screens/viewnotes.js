import React, { useState } from 'react';
import { SafeAreaView, StyleSheet,  View,FlatList } from 'react-native';
import {FAB,List,Text} from 'react-native-paper'
export default function viewnotes({navigation}) {
 const [notes,setNotes]=useState([])
 const addNote=(note)=>{
  note.id=note.length+1
  setNotes([...notes,note ])
 }
 
  return (
    <SafeAreaView style={styles.container}>

      {notes.length===0?(<View >
      <Text>You Don't Have Any Notes</Text>
      <View>
      <FAB style={styles.fab}  
      elevated
      icon='plus' 
      label='add new notes'
       onPress={()=>navigation.navigate('addnotes',{addNote})} />
      </View>
    </View>):<FlatList data={notes} renderItem={{Item}> (
    <List.Item
    title={Item.notestitle} 
    descrption={Item.notedescrption} 
    descrptionNumberOfLines={1}
    titleStyle={styles.listTitle}
    />)}/>
    }
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
  fab:{
    position:'absolute',
    margin:20,
    borderRadius:60,
    backgroundColor:'#BCF8C9',
 }
});
