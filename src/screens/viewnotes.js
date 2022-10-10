import React, { useState } from 'react';
import { SafeAreaView, StyleSheet,  FlatList,View } from 'react-native';
import {FAB,List,Text} from 'react-native-paper'
import {useSelector,useDispatch} from 'react-redux'
import { addNote,deleteNote } from '../REDUCER/notesApp'


export default function viewnotes({navigation}) {
 //const [notes,setNotes]=useState([])
 const notes= useSelector(state=>state)
 const dispatch=useDispatch()
 const addNote=(note)=>{
  console.log(note)
  dispatch(addNote(note))
 }
 const deleteNote=(id)=>dispatch(deleteNote(id ))
 
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
    </View>):
     (<FlatList 
      data={notes} 
      renderItem={({item})=> (
           <List.Item
            title={item.notestitle} 
            descrption={item.notedescrption} 
            descrptionNumberOfLines={1}
            titleStyle={styles.listTitle}
            onPress={()=>deleteNote(item.id)}/>
     )}
  keyExtractor={item=>item.id.toString()} 
  />
  
)}
  </SafeAreaView>
  )
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
